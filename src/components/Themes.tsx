import { book } from '../data/book'

/** Editorial list of themes: numbered lines rather than icon cards. */
export function Themes({ dark = false }: { dark?: boolean }) {
  return (
    <ol className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
      {book.themes.map((t, i) => (
        <li key={t.title} className={`border-t pt-5 ${dark ? 'border-ivory/25' : 'border-copper-light/60'}`}>
          <span className={`font-serif text-lg italic ${dark ? 'text-copper-light' : 'text-copper'}`}>
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className={`mt-1 ${dark ? '!text-ivory' : ''}`}>{t.title}</h3>
          <p className={`mt-2 ${dark ? 'text-ivory/75' : 'text-ink-soft'}`}>{t.line}</p>
        </li>
      ))}
    </ol>
  )
}
