import { AvatarDropdown } from './avatar-dropdown'

const Navbar = () => {
  return (
    <nav className="flex h-14 items-center border-b border-border px-8">
      <div className="flex-1">Logo</div>
      <AvatarDropdown />
    </nav>
  )
}

export { Navbar }
