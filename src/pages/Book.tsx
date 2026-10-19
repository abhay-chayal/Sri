import { book } from '../data/book'
import { Button } from '../components/Button'
import { BookCover } from '../components/BookCover'
import { BookDetails } from '../components/BookDetails'
import { PageContainer } from '../components/PageContainer'
import { SectionHeading } from '../components/SectionHeading'
import { Themes } from '../components/Themes'
import { RetailerLinks } from '../components/RetailerLinks'
import { AuthorIntroduction } from '../components/AuthorIntroduction'
import { Reveal } from '../components/Reveal'
import { useSeo } from '../components/useSeo'

export function Book() {
  useSeo(
    'Beyond the Rumors: The Journey from Innocence to Wisdom — Sri Lekha Vempati',
    'The official page for Beyond the Rumors: The Journey from Innocence to Wisdom, a work of fiction by Sri Lekha Vempati. Description, details and retailer links.',
  )
  return (
    <>
      <section className="bg-gradient-to-b from-ivory-deep to-ivory">
        <PageContainer className="grid items-center gap-12 py-14 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-20 md:py-24">
          <div className="mx-auto w-64 sm:w-72 md:w-full"><BookCover priority /></div>
          <div>
            <p className="eyebrow">A novel · Fiction</p>
            <h1 className="mt-4">
              {book.title}
              <span className="mt-3 block font-serif text-3xl italic text-copper sm:text-4xl">{book.subtitle}</span>
            </h1>
            <p className="mt-5 text-lg">by <strong className="font-semibold">{book.author}</strong></p>
            <p className="mt-1 text-ink-soft">Published August 27, 2026</p>
            <p className="mt-6 max-w-prose text-ink-soft">{book.tagline} A work of fiction about healing, trust and growth.</p>
            <div className="mt-8"><Button href="#where-to-find">Where to find the book</Button></div>
          </div>
        </PageContainer>
      </section>

      <section className="py-20">
        <PageContainer>
          <Reveal className="mx-auto max-w-prose">
            <SectionHeading eyebrow="About the book" title="The story" />
            <div className="prose-page mt-8 text-lg">
              {book.description.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            </div>
            <p className="mt-8 border-l-2 border-copper pl-5 font-serif text-2xl italic text-dusk-deep">{book.closing}</p>
            <p className="mt-6 text-sm text-ink-soft">
              Beyond the Rumors is a work of fiction. The story and its characters are imagined.
            </p>
          </Reveal>
        </PageContainer>
      </section>

      <section className="bg-dusk-deep py-20">
        <PageContainer>
          <Reveal>
            <SectionHeading eyebrow="Themes" title="What the story explores" className="mb-12 [&_h2]:!text-ivory [&_.eyebrow]:!text-copper-light" />
            <Themes dark />
          </Reveal>
        </PageContainer>
      </section>

      <section className="py-20">
        <PageContainer className="grid gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <SectionHeading eyebrow="Book details" title="At a glance" className="mb-8" />
            <BookDetails />
          </Reveal>
          <Reveal className="scroll-mt-28" >
            <div id="where-to-find" className="scroll-mt-28">
              <SectionHeading eyebrow="Find the book" title="Where to find it" className="mb-8" />
              <div className="[&_ul]:grid-cols-1 sm:[&_ul]:grid-cols-1"><RetailerLinks /></div>
            </div>
          </Reveal>
        </PageContainer>
      </section>

      <section className="bg-ivory-deep py-20">
        <PageContainer><Reveal><AuthorIntroduction /></Reveal></PageContainer>
      </section>
    </>
  )
}
