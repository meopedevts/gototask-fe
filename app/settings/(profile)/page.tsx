import { ProfileForm } from '@/components/profile-form'
import { Separator } from '@/components/ui/separator'

export default function Profile() {
  return (
    <div className="flex flex-col space-y-4">
      <div>
        <h1 className="text-lg font-semibold">Perfil</h1>
        <p className="text-sm text-muted-foreground">
          Essa é a forma como os outros te veem na plataforma.
        </p>
      </div>
      <Separator />
      <ProfileForm />
    </div>
  )
}
