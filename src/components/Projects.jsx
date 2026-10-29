import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { projects } from '../data/portfolio.js'

function ProjectLinks({ demo, repo }) {
  return (
    <div className="flex flex-wrap gap-3">
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-paper transition-opacity hover:opacity-90"
        >
          Ver demo
        </a>
      )}
      <a
        href={repo}
        target="_blank"
        rel="noreferrer"
        className="rounded-lg border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent"
      >
        Ver código
      </a>
    </div>
  )
}

export default function Projects() {
  return (
    <Section id="proyectos" title="Proyectos">
      <ul className="space-y-14">
        {projects.map((p) => (
          <Reveal as="li" key={p.title} className="group">
            {p.image && (
              <a
                href={p.demo || p.repo}
                target="_blank"
                rel="noreferrer"
                className="mb-6 block overflow-hidden rounded-xl border border-line bg-accent-soft"
                aria-label={`Abrir ${p.title}`}
              >
                <img
                  src={p.image}
                  alt={`Captura de ${p.title}`}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </a>
            )}
            <h3 className="text-xl font-bold tracking-tight text-ink">
              {p.title}
              {p.status && (
                <span className="ml-3 align-middle rounded-full bg-accent-soft px-2.5 py-0.5 text-sm font-medium text-accent">
                  {p.status}
                </span>
              )}
            </h3>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">{p.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologías">
              {p.stack.map((t) => (
                <li key={t} className="rounded-md border border-line px-2.5 py-1 text-sm text-ink">
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <ProjectLinks demo={p.demo} repo={p.repo} />
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
