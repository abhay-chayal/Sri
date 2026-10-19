import { social } from '../data/author'

export function SocialLinks({ className = '' }: { className?: string }) {
  const { instagram } = social
  return (
    <ul className={className}>
      <li>
        <a
          href={instagram.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 transition-colors hover:text-copper-dark"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" />
          </svg>
          <span>Instagram {instagram.handle}</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </li>
    </ul>
  )
}
