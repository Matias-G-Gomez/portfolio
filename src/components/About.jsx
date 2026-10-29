import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { profile } from '../data/portfolio.js'

export default function About() {
  return (
    <Section id="perfil" title="Perfil">
      <Reveal className="max-w-2xl space-y-4 text-lg leading-relaxed text-ink">
        {profile.summary.map((p) => (
          <p key={p.slice(0, 20)}>{p}</p>
        ))}
      </Reveal>
    </Section>
  )
}
