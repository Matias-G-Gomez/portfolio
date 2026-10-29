import StackGraph from './StackGraph.jsx'
import { profile } from '../data/portfolio.js'

export default function Hero() {
  return (
    <header id="top" className="grid items-center gap-10 pb-16 pt-12 sm:pt-20 md:grid-cols-[1fr_auto]">
      <div className="intro">
        <p className="text-base font-medium text-muted">{profile.location}</p>
        <h1 className="mt-3 text-5xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-5 text-xl font-medium text-ink">{profile.role}</p>
        <p className="mt-1 max-w-xl text-lg text-muted">{profile.focus}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={profile.cv}
            download
            className="rounded-lg bg-accent px-5 py-2.5 font-medium text-paper transition-opacity hover:opacity-90"
          >
            Descargar CV
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg border border-line px-5 py-2.5 font-medium text-ink transition-colors hover:border-accent"
          >
            Escribirme
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-line px-5 py-2.5 font-medium text-ink transition-colors hover:border-accent"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-line px-5 py-2.5 font-medium text-ink transition-colors hover:border-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="justify-self-center md:justify-self-end">
        <StackGraph />
      </div>
    </header>
  )
}
