export default function Intro({ title, tagline }) {
  const trimmedTitle = title?.trim() || ''
  const titleToShow = trimmedTitle?.endsWith('.') ? title : `${trimmedTitle}.`

  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {titleToShow}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        {tagline}
      </h4>
    </section>
  )
}
