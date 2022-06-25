import { Logo } from './Logo'

export function Header() {
  return (
    <header className="w-full py-5 flex items-center justify-center border-b border-gray-600 bg-gray-900 sticky top-0 z-50">
      <Logo />
    </header>
  )
}
