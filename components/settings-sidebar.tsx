'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarOtions {
  label: string
  href: string
}

const options: SidebarOtions[] = [
  {
    label: 'Perfil',
    href: '/settings',
  },
  // {
  //   label: 'Conta',
  //   href: '/settings/account',
  // },
  {
    label: 'Aparência',
    href: '/settings/appearance',
  },
]

const SettingsSidebar = () => {
  const pathname = usePathname()

  return (
    <ul className="mx-4 flex w-60 flex-col gap-1">
      {options.map((option, index) => {
        return (
          <Link
            href={option.href}
            key={index}
            className={cn(
              'rounded-md px-4 py-2 text-sm hover:cursor-pointer hover:bg-muted',
              pathname === option.href ? 'bg-muted' : '',
            )}
          >
            <li>{option.label}</li>
          </Link>
        )
      })}
    </ul>
  )
}

export { SettingsSidebar }
