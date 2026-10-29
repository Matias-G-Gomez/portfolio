import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <NavBar />
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Hero />
        <main>
          <About />
          <Projects />
          <Experience />
          <Education />
          <Skills />
        </main>
        <Contact />
      </div>
    </>
  )
}
