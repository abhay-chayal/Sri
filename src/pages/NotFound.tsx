import { Button } from '../components/Button'
import { PageContainer } from '../components/PageContainer'
import { useSeo } from '../components/useSeo'

export function NotFound() {
  useSeo('Page not found — Sri Lekha Vempati', 'This page could not be found.')
  return (
    <PageContainer className="py-28 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4">This page seems to have wandered off</h1>
      <p className="mx-auto mt-6 max-w-prose text-ink-soft">
        The page you were looking for doesn’t exist. Let’s get you back to the story.
      </p>
      <div className="mt-9 flex justify-center gap-4">
        <Button to="/">Back to Home</Button>
        <Button to="/book" variant="secondary">The Book</Button>
      </div>
    </PageContainer>
  )
}
