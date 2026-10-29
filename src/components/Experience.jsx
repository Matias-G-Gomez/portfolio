import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { experience } from '../data/portfolio.js'

export default function Experience() {
  return (
    <Section id="experiencia" title="Experiencia">
      <ol className="relative max-w-2xl border-l border-line">
        {experience.map((job, i) => (
          <Reveal
            as="li"
            key={job.company}
            className={`relative pl-8 ${i < experience.length - 1 ? 'pb-12' : ''}`}
          >
            <span
              className="absolute -left-[6.5px] top-2 h-3 w-3 rounded-full border-2 border-accent bg-paper"
              aria-hidden="true"
            />
            <p className="text-sm font-medium text-muted">
              {job.period} | {job.mode}
            </p>
            <h3 className="mt-1 text-xl font-bold tracking-tight text-ink">{job.role}</h3>
            <p className="mt-0.5 font-medium text-accent">{job.company}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-muted">
              {job.tasks.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}