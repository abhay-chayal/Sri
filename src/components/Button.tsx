import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'text' | 'external'

interface Props {
  to?: string // internal route
  href?: string // external URL
  variant?: Variant
  disabled?: boolean
  children: ReactNode
  className?: string
}

const base =
  'inline-flex items-center justify-center gap-2 font-sans text-[0.95rem] font-medium transition-all duration-300'
const styles: Record<Variant, string> = {
  primary:
    'rounded-full bg-dusk px-7 py-3.5 text-ivory shadow-sm hover:bg-copper-dark hover:shadow-md',
  secondary:
    'rounded-full border border-dusk/40 px-7 py-3.5 text-dusk-deep hover:border-copper-dark hover:text-copper-dark',
  text: 'text-copper-dark underline decoration-copper-light underline-offset-4 hover:text-dusk-deep',
  external:
    'w-full justify-between rounded-lg border border-taupe bg-white px-5 py-4 text-dusk-deep hover:-translate-y-0.5 hover:border-copper hover:shadow-md',
}
const disabledStyle = 'cursor-not-allowed opacity-50 hover:shadow-none hover:translate-y-0'

/** Renders a router link, an external anchor, or (only when no destination) a disabled placeholder. */
export function Button({ to, href, variant = 'primary', disabled, children, className = '' }: Props) {
  const cls = `${base} ${styles[variant]} ${disabled ? disabledStyle : ''} ${className}`
  if (disabled || (!to && !href)) {
    return (
      <span className={cls} aria-disabled="true">
        {children}
      </span>
    )
  }
  if (to) return <Link to={to} className={cls}>{children}</Link>
  if (href && (href.startsWith('#') || href.startsWith('mailto:'))) {
    return <a href={href} className={cls}>{children}</a>
  }
  return (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
      {children}
      {variant === 'external' && <span aria-hidden="true">↗</span>}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}
