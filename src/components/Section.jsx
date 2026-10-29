import Reveal from './Reveal.jsx'

export default function Section({ id, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 border-t border-line py-16 sm:py-20">
      <div className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-10">
        <Reveal>
          <h2 id={`${id}-title`} className="text-lg font-bold tracking-tight text-ink md:sticky md:top-24">
            {title}
          </h2>
        </Reveal>
        <div>{children}</div>
      </div>
    </section>
  )
}
