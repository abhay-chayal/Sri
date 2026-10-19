import { book } from '../data/book'

/** The supplied cover, never cropped or stretched. width/height reserve space to avoid layout shift. */
export function BookCover({ className = '', priority = false }: { className?: string; priority?: boolean }) {
  const { cover } = book
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-6 -z-10 rounded-full bg-copper-light/30 blur-3xl" aria-hidden="true" />
      <picture>
        <source srcSet={cover.src} type="image/webp" />
        <img
          src={cover.fallback}
          width={cover.width}
          height={cover.height}
          alt={cover.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="h-auto w-full rounded-sm shadow-[0_24px_50px_-12px_rgba(34,51,63,0.45)]"
        />
      </picture>
    </div>
  )
}
