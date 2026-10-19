import { book } from '../data/book'

export function BookDetails({ className = '' }: { className?: string }) {
  return (
    <dl className={`divide-y divide-taupe border-y border-taupe ${className}`}>
      {book.details.map((d) => (
        <div key={d.label} className="grid grid-cols-[9rem_1fr] gap-4 py-3.5 sm:grid-cols-[12rem_1fr]">
          <dt className="text-sm text-ink-soft">{d.label}</dt>
          <dd className="font-medium text-dusk-deep">{d.value}</dd>
        </div>
      ))}
    </dl>
  )
}
