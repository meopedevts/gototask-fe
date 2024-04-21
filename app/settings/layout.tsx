import { SettingsSidebar } from '@/components/settings-sidebar'
import { Separator } from '@/components/ui/separator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Configurações - GotoTask',
  description: 'Gerencie as configurações da sua conta.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="mt-8 space-y-4">
      <div className="mx-8">
        <h1 className="text-xl font-semibold">Configurações</h1>
        <p className="text-base text-muted-foreground">
          Gerencie as configurações da sua conta e preferências.
        </p>
      </div>
      <Separator className="mx-8" />
      <div className="flex gap-2">
        <SettingsSidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}
