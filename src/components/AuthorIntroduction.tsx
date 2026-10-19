import { author } from '../data/author'
import { Button } from './Button'
import { AuthorPhoto } from './AuthorPhoto'
import { SectionHeading } from './SectionHeading'

/** Compact author block used on Home and the Book page. */
export function AuthorIntroduction() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-[minmax(0,20rem)_1fr] md:gap-16">
      <AuthorPhoto className="mx-auto max-w-xs md:max-w-none" />
      <div>
        <SectionHeading eyebrow="The author" title={author.name} />
        <p className="mt-5 max-w-prose">{author.bio[0]}</p>
        <div className="mt-7">
          <Button to="/about" variant="secondary">About the Author</Button>
        </div>
      </div>
    </div>
  )
}
