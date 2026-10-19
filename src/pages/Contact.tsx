import { author } from '../data/author'
import { Button } from '../components/Button'
import { PageContainer } from '../components/PageContainer'
import { SectionHeading } from '../components/SectionHeading'
import { SocialLinks } from '../components/SocialLinks'
import { useSeo } from '../components/useSeo'

export function Contact() {
  useSeo(
    'Contact — Sri Lekha Vempati',
    'Get in touch with author Sri Lekha Vempati by email or on Instagram.',
  )
  return (
    <>
      <section className="bg-gradient-to-b from-ivory-deep to-ivory">
        <PageContainer className="py-16 md:py-24">
          <SectionHeading eyebrow="Contact" title="Get in touch" as="h1" />
          <p className="mt-6 max-w-prose text-lg text-ink-soft">
            Readers, reviewers and fellow book lovers are welcome to reach out. Email is the best way to contact Sri, and you can also find her on Instagram.
          </p>
        </PageContainer>
      </section>

      <section className="py-16">
        <PageContainer className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-taupe bg-white p-8">
            <p className="eyebrow">Email</p>
            <p className="mt-4 break-words font-serif text-2xl text-dusk-deep sm:text-3xl">{author.email}</p>
            <div className="mt-6">
              <Button href={`mailto:${author.email}`} variant="primary">Write an email</Button>
            </div>
          </div>
          <div className="rounded-xl border border-taupe bg-white p-8">
            <p className="eyebrow">Social</p>
            <p className="mt-4 font-serif text-2xl text-dusk-deep sm:text-3xl">Find Sri online</p>
            <SocialLinks className="mt-6 text-lg" />
            <p className="mt-6 text-sm text-ink-soft">Based in the {author.country}.</p>
          </div>
        </PageContainer>
      </section>
    </>
  )
}
