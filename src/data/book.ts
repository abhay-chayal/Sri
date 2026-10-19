// Source: client file "Author Information.docx". Blurb is verbatim.
export const book = {
  title: 'Beyond the Rumors',
  subtitle: 'The Journey from Innocence to Wisdom',
  fullTitle: 'Beyond the Rumors: The Journey from Innocence to Wisdom',
  author: 'Sri Lekha Vempati',
  tagline: 'Because beyond every rumor lies a truth.',
  cover: {
    src: '/images/book/beyond-the-rumors-front.webp',
    fallback: '/images/book/beyond-the-rumors-front.jpg',
    width: 332,
    height: 506,
    alt: 'Cover of Beyond the Rumors: The Journey from Innocence to Wisdom, a novel by Sri Vempati. A woman in a cream dress walks along a path toward a golden sunrise.',
  },
  // Used for the short introductions on Home and in the hero (first paragraph of the blurb, verbatim).
  intro:
    'At five years old, Grace believed she lived in the happiest family in the world… clueless that a single afternoon, a forgotten yoga mat, and one classmate’s obsession would quietly end her innocence.',
  description: [
    'At five years old, Grace believed she lived in the happiest family in the world… clueless that a single afternoon, a forgotten yoga mat, and one classmate’s obsession would quietly end her innocence. Her innocence was misused in ways she was too young to understand, leaving behind wounds that would follow her long after the whispers died down.',
    'By the time she reaches adulthood, Grace has learned to survive in silence. She has loved someone whose selflessness cost him everything. She has left behind a home that promised safety and gave her fear instead. And just when she finally finds her footing, in a new city, a new career, a new version of herself, the past she thought she had outrun walks back into her life wearing a name tag and a smile.',
    'Beyond the Rumors follows Grace across cities, careers, and heartbreaks as she learns that healing rarely looks like the straight line we hope for. It is messier, slower, and demands far more bravery than we expect. It asks what happens when the people meant to protect us cannot, what it costs to finally say enough, and whether trust, once broken, can ever be rebuilt on our own terms.',
    'Told with unflinching honesty and quiet hope, this is a story about the wounds we carry without anyone noticing, and the strength it takes to become someone new without forgetting who we used to be.',
  ],
  closing:
    'Because beyond every rumor lies a truth. Beyond every scar lies strength. And beyond every ending lies the possibility of a beautiful new beginning.',
  // Themes the author named, plus ideas taken directly from the blurb.
  themes: [
    { title: 'Rumors & misunderstandings', line: 'What whispers do to the people at the centre of them.' },
    { title: 'Relationships & friendship', line: 'Love, loyalty and the people who stay.' },
    { title: 'Healing & trust', line: 'Whether trust, once broken, can be rebuilt on our own terms.' },
    { title: 'Self-discovery & growth', line: 'Becoming someone new without forgetting who we used to be.' },
    { title: 'Innocence to wisdom', line: 'The long road from where Grace began.' },
  ],
  // Only confirmed fields. ISBN not supplied, so it is not shown.
  details: [
    { label: 'Author', value: 'Sri Lekha Vempati' },
    { label: 'Genre', value: 'Fiction' },
    { label: 'Publication date', value: 'August 27, 2026' },
    { label: 'Formats', value: 'eBook, Paperback, Hardcover' },
    { label: 'Retailer region', value: 'United States' },
  ],
}

// Central place for verified retailer URLs (all from the client file).
export const retailers = [
  { name: 'Amazon', href: 'https://a.co/d/09p0pnDO', note: 'Buy or preview on Amazon' },
  {
    name: 'Barnes & Noble',
    // The client's document broke this link across a line; the hyperlink target was truncated
    // at ".../sri-lekha-". Reassembled from the visible text. NEEDS CLICK-THROUGH CHECK.
    href: 'https://www.barnesandnoble.com/w/beyond-the-rumors-sri-lekha-vempati/1151180464?ean=9798902352433',
    note: 'Find it at Barnes & Noble',
  },
  { name: 'Goodreads', href: 'https://www.goodreads.com/book/show/257610588-beyond-the-rumors', note: 'Add to your shelf on Goodreads' },
]
