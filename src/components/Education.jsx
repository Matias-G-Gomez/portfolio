import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { education, certifications, languages } from '../data/portfolio.js'

export default function Education() {
  return (
    <Section id="formacion" title="Formación">
      <div className="space-y-8">
        {education.map((e) => (
          <Reveal key={e.degree} className="max-w-2xl">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-lg font-bold text-ink">{e.degree}</h3>
              <p className="text-muted">
                {e.school} | {e.detail}
              </p>
            </div>
            <div className="mt-3 flex items-center gap-4">
              <div
                className="h-2 flex-1 overflow-hidden rounded-full bg-line"
                role="progressbar"
                aria-valuenow={e.progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${e.progress}% de la carrera aprobada`}
              >
                <div className="h-full" style={{ width: `${e.progress}%` }}>
                  <div className="bar h-full rounded-full bg-accent" />
                </div>
              </div>
              <span className="w-28 text-right text-sm font-medium text-ink">{e.progress}% aprobado</span>
            </div>
          </Reveal>
        ))}

        <Reveal className="grid max-w-2xl gap-8 pt-2 sm:grid-cols-2">
          <div>
            <h3 className="font-bold text-ink">Certificaciones</h3>
            <ul className="mt-3 space-y-2 text-muted">
              {certifications.map((c) => (
                <li key={c.name}>
                  <span className="text-ink">{c.name}</span>, {c.issuer} ({c.year})
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-ink">Idiomas</h3>
            <ul className="mt-3 space-y-2 text-muted">
              {languages.map((l) => (
                <li key={l.name}>
                  <span className="text-ink">{l.name}</span>: {l.level}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
