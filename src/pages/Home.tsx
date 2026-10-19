import { Link } from 'react-router-dom'
import { book } from '../data/book'
import { Button } from '../components/Button'
import { BookCover } from '../components/BookCover'
import { PageContainer } from '../components/PageContainer'
import { SectionHeading } from '../components/SectionHeading'
import { Themes } from '../components/Themes'
import { AuthorIntroduction } from '../components/AuthorIntroduction'
import { RetailerLinks } from '../components/RetailerLinks'
import { SocialLinks } from '../components/SocialLinks'
import { Reveal } from '../components/Reveal'
import { useSeo } from '../components/useSeo'

export function Home() {
  useSeo(
    'Sri Lekha Vempati — Author of Beyond the Rumors',
    'Sri Lekha Vempati is the author of Beyond the Rumors: The Journey from Innocence to Wisdom, a work of fiction about healing, trust and growth.',
  )
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ivory-deep to-ivory">
        <PageContainer className="grid items-center gap-12 py-14 md:grid-cols-[1.15fr_0.85fr] md:py-24">
          <div>
            <p className="eyebrow">A novel by Sri Lekha Vempati</p>
            <h1 className="mt-4">
              Beyond the Rumors<span className="mt-3 block font-serif text-3xl italic text-copper sm:text-4xl">The Journey from Innocence to Wisdom</span>
            </h1>
            <p className="mt-7 max-w-prose text-lg text-ink-soft">
              A work of fiction about healing, trust, and the strength it takes to become someone new without forgetting who we used to be.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button to="/book">Discover the Book</Button>
              <Button to="/about" variant="secondary">About the Author</Button>
            </div>
          </div>
          <div className="mx-auto w-64 sm:w-72 md:w-full md:max-w-sm md:justify-self-center">
            <BookCover priority />
          </div>
        </PageContainer>
      </section>

      {/* Book introduction */}
      <section className="py-20">
        <PageContainer>
          <Reveal className="mx-auto max-w-prose text-center">
            <SectionHeading eyebrow="The story" title={book.fullTitle} />
            <p className="mt-6 text-lg">{book.intro}</p>
            <p className="mt-6 font-serif text-2xl italic text-copper-dark">{book.tagline}</p>
            <div className="mt-8">
              <Button to="/book" variant="text">Read the full description →</Button>
            </div>
          </Reveal>
        </PageContainer>
      </section>

      {/* Themes */}
      <section className="bg-dusk-deep py-20">
        <PageContainer>
          <Reveal>
            <SectionHeading eyebrow="What the story explores" title="Themes at the heart of the book" className="mb-12 [&_h2]:!text-ivory [&_.eyebrow]:!text-copper-light" />
            <Themes dark />
          </Reveal>
        </PageContainer>
      </section>

      {/* Author */}
      <section className="py-20">
        <PageContainer>
          <Reveal><AuthorIntroduction /></Reveal>
        </PageContainer>
      </section>

      {/* Discovery */}
      <section className="bg-ivory-deep py-20">
        <PageContainer>
          <Reveal>
            <SectionHeading eyebrow="Find the book" title="Where to find Beyond the Rumors" className="mb-8" />
            <RetailerLinks />
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-taupe pt-8">
              <p className="text-ink-soft">Follow Sri for updates</p>
              <SocialLinks />
            </div>
            <p className="mt-6 text-sm text-ink-soft">
              Prefer the details first? See the <Link to="/book" className="link-inline">book page</Link>.
            </p>
          </Reveal>
        </PageContainer>
      </section>
    </>
  )
}
