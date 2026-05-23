import { useState, useEffect, useCallback } from 'react'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Sports from './components/Sports'
import Stats from './components/Stats'
import Marquee from './components/Marquee'
import Events from './components/Events'
import Gallery from './components/Gallery'
import Timeline from './components/Timeline'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [cursorHover, setCursorHover] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleMouseMove = useCallback((e) => {
    setCursorPos({ x: e.clientX, y: e.clientY })
  }, [])

  useEffect(() => {
    if (isMobile) return
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile, handleMouseMove])

  useEffect(() => {
    if (isMobile) return
    const interactiveEls = document.querySelectorAll('a, button, .sport-card, .event-card, .gallery-item, .testimonial-card')
    const enter = () => setCursorHover(true)
    const leave = () => setCursorHover(false)
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })
    return () => {
      interactiveEls.forEach(el => {
        el.removeEventListener('mouseenter', enter)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [isMobile])

  // Global Scroll Reveal
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          revealObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" })

    revealElements.forEach(el => revealObserver.observe(el))

    return () => {
      revealElements.forEach(el => revealObserver.unobserve(el))
      revealObserver.disconnect()
    }
  }, [])

  return (
    <>
      <Loader />

      {/* Custom Cursor */}
      {!isMobile && (
        <>
          <div
            className="cursor-dot"
            style={{ left: cursorPos.x - 4, top: cursorPos.y - 4 }}
          />
          <div
            className={`cursor-ring ${cursorHover ? 'hover' : ''}`}
            style={{ left: cursorPos.x, top: cursorPos.y }}
          />
        </>
      )}

      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Sports />
        <Stats />
        <Marquee />
        <Events />
        <Gallery />
        <Timeline />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
