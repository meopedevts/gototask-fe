import { Separator } from '@/components/ui/separator'

export default function Account() {
  return (
    <div className="flex flex-col space-y-4">
      <div>
        <h1 className="text-lg font-semibold">Aparência</h1>
        <p className="text-sm text-muted-foreground">
          Customize a aparência do seu app. Alterando entre os temas dia e
          noite.
        </p>
      </div>
      <Separator />
    </div>
  )
}
