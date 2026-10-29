import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio.js'

const links = [
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'formacion', label: 'Formación' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'contacto', label: 'Contacto' },
]

export default function NavBar() {
  const [active, setActive] = useState('')
  const [progress, setProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  // Barra de progreso, sombra del menú y sección activa, calculadas al scrollear
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
      setScrolled(window.scrollY > 8)

      // Al llegar al final de la página, se marca la última sección (Contacto)
      if (window.scrollY >= max - 4) {
        setActive(links.at(-1).id)
        return
      }
      // Si no, se marca la última sección cuyo inicio ya pasó el 40% de la pantalla
      let current = ''
      for (const l of links) {
        const el = document.getElementById(l.id)
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = l.id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <nav
      aria-label="Secciones"
      className={`sticky top-0 z-20 border-b backdrop-blur-md transition-colors duration-300 ${
        scrolled ? 'border-line bg-paper/85' : 'border-transparent bg-paper/0'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#top" className="font-bold tracking-tight text-ink">
          {profile.name.split(' ')[0]} {profile.name.split(' ').at(-1)}
        </a>
        <ul className="hidden gap-6 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  active === l.id ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
                    active === l.id ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.cv}
          download
          className="rounded-lg border border-line px-3.5 py-1.5 text-sm font-medium text-ink transition-colors hover:border-accent md:hidden"
        >
          CV
        </a>
      </div>
      <div
        className="absolute bottom-[-1px] left-0 h-[2px] origin-left bg-accent"
        style={{ width: '100%', transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
    </nav>
  )
}
