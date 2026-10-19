export function SectionHeading({
  eyebrow,
  title,
  as: Tag = 'h2',
  className = '',
}: {
  eyebrow?: string
  title: string
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}) {
  return (
    <div className={className}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <Tag>{title}</Tag>
    </div>
  )
}
