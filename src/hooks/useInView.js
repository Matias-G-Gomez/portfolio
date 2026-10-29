import { useEffect, useRef, useState } from 'react'

// Devuelve una ref y si el elemento ya entró en pantalla.
// Se activa una sola vez, así la animación no se repite al volver a scrollear.
export default function useInView(options = { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, options)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}
