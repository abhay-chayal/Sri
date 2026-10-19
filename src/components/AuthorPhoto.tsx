import { author } from '../data/author'

export function AuthorPhoto({ className = '' }: { className?: string }) {
  const p = author.photo
  return (
    <picture>
      <source srcSet={p.src} type="image/webp" />
      <img
        src={p.fallback}
        width={p.width}
        height={p.height}
        alt={p.alt}
        loading="lazy"
        decoding="async"
        className={`h-auto w-full rounded-t-[10rem] rounded-b-lg object-cover shadow-lg ${className}`}
      />
    </picture>
  )
}
