import { Link } from 'react-router-dom'
import { navigation, site } from '../data/navigation'
import { book } from '../data/book'
import { PageContainer } from './PageContainer'
import { SocialLinks } from './SocialLinks'

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-dusk-deep text-ivory/85">
      <PageContainer className="grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-ivory">{site.name}</p>
          <p className="mt-2 max-w-xs text-sm">Author of <em>{book.title}</em>, a work of fiction.</p>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow !text-copper-light">Explore</p>
          <ul className="mt-4 space-y-2">
            {navigation.map((n) => (
              <li key={n.to}><Link to={n.to} className="transition-colors hover:text-copper-light">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="eyebrow !text-copper-light">Follow &amp; discover</p>
          <SocialLinks className="mt-4 space-y-2" />
          <p className="mt-3"><Link to="/book" className="transition-colors hover:text-copper-light">{book.fullTitle}</Link></p>
        </div>
      </PageContainer>
      <div className="border-t border-ivory/15 py-5 text-center text-sm text-ivory/60">
        © {site.year} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}
