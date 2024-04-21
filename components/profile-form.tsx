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
import { Textarea } from '@/components/ui/textarea'

const profileFormSchema = z.object({
  username: z.string().min(2, {
    message: 'O nome de usuário deve ter pelo menos 2 caracteres',
  }),
  bio: z.string().max(160).min(4),
})

type profileFormValues = z.infer<typeof profileFormSchema>

const ProfileForm = () => {
  const form = useForm<profileFormValues>({
    resolver: zodResolver(profileFormSchema),
  })

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

export { ProfileForm }
