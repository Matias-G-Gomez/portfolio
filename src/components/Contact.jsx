import Reveal from './Reveal.jsx'
import { profile } from '../data/portfolio.js'

export default function Contact() {
  return (
    <footer
      id="contacto"
      className="flex min-h-[75vh] scroll-mt-16 flex-col justify-between border-t border-line pb-10 pt-20 sm:pt-24"
    >
      <Reveal>
        <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Hablemos</h2>
        <p className="mt-3 max-w-xl text-lg text-muted">
          Estoy buscando mi primera posición como desarrollador. Si tenés una búsqueda abierta, escribime.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-block break-all text-xl font-bold text-accent underline-offset-4 hover:underline sm:text-2xl"
        >
          {profile.email}
        </a>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-medium">
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-ink underline-offset-4 hover:text-accent hover:underline">
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-ink underline-offset-4 hover:text-accent hover:underline">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={profile.cv} download className="text-ink underline-offset-4 hover:text-accent hover:underline">
              Descargar CV
            </a>
          </li>
        </ul>
      </Reveal>
      <p className="mt-16 text-sm text-muted">{profile.name} | Hecho con React y Tailwind CSS</p>
    </footer>
  )
}
