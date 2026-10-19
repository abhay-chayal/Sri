import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigation } from '../data/navigation'
import { Button } from './Button'
import { PageContainer } from './PageContainer'

const linkCls = ({ isActive }: { isActive: boolean }) =>
  `relative py-1 text-[0.95rem] transition-colors hover:text-copper-dark ${
    isActive ? 'text-copper-dark after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-copper' : 'text-ink'
  }`

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-taupe/70 bg-ivory/90 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-white focus:px-4 focus:py-2">
        Skip to content
      </a>
      <PageContainer className="flex h-[4.5rem] items-center justify-between">
        <Link to="/" className="font-serif text-2xl font-semibold text-dusk-deep" aria-label="Sri Lekha Vempati — home">
          Sri Lekha <span className="text-copper">Vempati</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navigation.map((n) => (
            <NavLink key={n.to} to={n.to} end className={linkCls}>{n.label}</NavLink>
          ))}
          <Button to="/book" className="!px-5 !py-2.5">Discover the Book</Button>
        </nav>

        <button
          type="button"
          className="-mr-2 rounded p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </PageContainer>

      {/* MobileNavigation */}
      <nav id="mobile-nav" aria-label="Mobile" hidden={!open} className="border-t border-taupe bg-ivory md:hidden">
        <PageContainer className="flex flex-col gap-1 py-4">
          {navigation.map((n) => (
            <NavLink key={n.to} to={n.to} end className={({ isActive }) => `rounded px-1 py-3 text-lg ${isActive ? 'text-copper-dark' : 'text-ink'}`}>
              {n.label}
            </NavLink>
          ))}
          <Button to="/book" className="mt-3">Discover the Book</Button>
        </PageContainer>
      </nav>
    </header>
  )
}
