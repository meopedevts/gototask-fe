'use client'

import { Separator } from '@/components/ui/separator'
import dynamic from 'next/dynamic'

const AppearanceForm = dynamic(() => import('@/components/appearance-form'), {
  ssr: false,
})

export default function Appearance() {
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
      <AppearanceForm />
    </div>
  )
}
