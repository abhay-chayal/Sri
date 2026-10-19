import { retailers } from '../data/book'
import { Button } from './Button'

export function RetailerLinks({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <ul className="grid gap-3 sm:grid-cols-3">
        {retailers.map((r) => (
          <li key={r.name}>
            <Button href={r.href} variant="external">
              <span>{r.name}</span>
            </Button>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-ink-soft">
        These links open the official retailer pages in a new tab. Purchases are completed on those sites, not here.
      </p>
    </div>
  )
}
