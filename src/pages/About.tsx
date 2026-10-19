import { author } from '../data/author'
import { book } from '../data/book'
import { Button } from '../components/Button'
import { AuthorPhoto } from '../components/AuthorPhoto'
import { PageContainer } from '../components/PageContainer'
import { SectionHeading } from '../components/SectionHeading'
import { SocialLinks } from '../components/SocialLinks'
import { useSeo } from '../components/useSeo'

export function About() {
  useSeo(
    'About the Author — Sri Lekha Vempati',
    'Meet Sri Lekha Vempati, an author inspired by human emotions, relationships and personal growth, and the writer of the fiction novel Beyond the Rumors.',
  )
  return (
    <>
      <section className="bg-gradient-to-b from-ivory-deep to-ivory">
        <PageContainer className="grid items-center gap-12 py-14 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-20 md:py-24">
          <AuthorPhoto className="mx-auto max-w-xs md:max-w-none" />
          <div>
            <SectionHeading eyebrow="About the author" title={author.name} as="h1" />
            <div className="prose-page mt-8 max-w-prose">
              {author.bio.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="py-20">
        <PageContainer className="max-w-3xl text-center">
          <p className="eyebrow">In her words</p>
          <blockquote className="mt-5 font-serif text-3xl italic leading-snug text-dusk-deep sm:text-4xl">
            “{author.inHerWords}”
          </blockquote>
          <p className="mt-4 text-sm text-ink-soft">— {author.name}</p>
        </PageContainer>
      </section>

      <section className="bg-dusk-deep py-20 text-ivory">
        <PageContainer className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
          <div className="max-w-prose">
            <p className="eyebrow !text-copper-light">The book</p>
            <h2 className="mt-3 !text-ivory">{book.title}</h2>
            <p className="mt-5 text-ivory/80">
              <em>{book.fullTitle}</em> is a work of fiction exploring rumors, misunderstandings, relationships, friendship,
              self-discovery and personal growth. It is a novel, not a memoir.
            </p>
            <div className="mt-8">
              <Button to="/book" className="!bg-ivory !text-dusk-deep hover:!bg-copper-light">Explore the Book</Button>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="py-16">
        <PageContainer className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <p className="font-serif text-2xl text-dusk-deep">Follow Sri</p>
          <SocialLinks />
        </PageContainer>
      </section>
    </>
  )
}
