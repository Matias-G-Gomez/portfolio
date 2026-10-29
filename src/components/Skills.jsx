import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { skills } from '../data/portfolio.js'

export default function Skills() {
  return (
    <Section id="habilidades" title="Habilidades">
      <Reveal as="dl" className="grid max-w-2xl gap-x-8 gap-y-5 sm:grid-cols-[140px_1fr]">
        {skills.map((s) => (
          <div key={s.group} className="contents">
            <dt className="font-bold text-ink">{s.group}</dt>
            <dd className="text-muted">{s.items.join(', ')}</dd>
          </div>
        ))}
      </Reveal>
    </Section>
  )
}
