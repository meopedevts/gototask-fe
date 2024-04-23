'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Textarea } from '@/components/ui/textarea'
import { ArrowDownToLine } from 'lucide-react'
import { useEffect } from 'react'

type WatchFileType = FileList | File | undefined

const profileFormSchema = z
  .object({
    image: z.instanceof(FileList).optional(),
    username: z.string().min(2, {
      message: 'O nome de usuário deve ter pelo menos 2 caracteres',
    }),
    bio: z.string().max(160).min(4),
  })
  .refine(
    (data) => {
      if (data.image) {
        const file = data.image.item(0)
        return file!.size < 1024 * 1024 * 10
      }
      return false
    },
    {
      message: 'A imagem deve possuir no máximo 10MBs',
      path: ['image'],
    },
  )

type profileFormValues = z.infer<typeof profileFormSchema>

const ProfileForm = () => {
  const form = useForm<profileFormValues>({
    resolver: zodResolver(profileFormSchema),
  })

  const fileRef = form.register('image')

  const watchFile: WatchFileType = form.watch('image')

  useEffect(() => {
    if (watchFile !== undefined) {
      const file = watchFile
      if (file !== null && file.size > 1024 * 1024 * 10) {
        form.setError('image', {
          message: 'A imagem deve possuir no máximo 10MBs',
        })
      } else {
        form.clearErrors('image')
      }
    }
  }, [watchFile, form])

  function onSubmit(values: profileFormValues) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-3xl space-y-8"
      >
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="max-w-md">
              <FormLabel>Foto de Perfil</FormLabel>
              <FormControl>
                <div className="group/avatar relative z-10 flex h-60 w-60 items-center justify-center rounded-full">
                  <Avatar className="h-full w-full">
                    <AvatarImage src="teste.jpeg" />
                    <AvatarFallback className="text-4xl">GT</AvatarFallback>
                  </Avatar>
                  <ArrowDownToLine className="absolute hidden h-20 w-20 transition-all group-hover/avatar:block group-hover/avatar:text-zinc-600" />
                  <Input
                    className="absolute h-60 w-60 cursor-pointer content-center rounded-full bg-muted text-transparent opacity-0 transition-opacity file:hidden group-hover/avatar:opacity-50"
                    type="file"
                    {...fileRef}
                    onChange={(event) => {
                      field.onChange(event.target?.files?.[0] ?? undefined)
                    }}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="max-w-md">
              <FormLabel>Nome de Usuário</FormLabel>
              <FormControl>
                <Input placeholder="GotoTask" {...field} />
              </FormControl>
              <FormDescription>
                Esse é seu nome público. Você pode usar o seu verdadeiro nome ou
                um pseudônimo. Você pode fazer essa alteração a cada 30 dias.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Fale um pouco sobre você..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Atualizar perfil</Button>
      </form>
    </Form>
  )
}

export default ProfileForm
