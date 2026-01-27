import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Nav.module.css'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.wrap}>
        <a href="#home" className={styles.logo}>
          P<span className={styles.logoAccent}>S</span>
        </a>

        <nav className={styles.desktop}>
          {LINKS.map(({ href, label }) => (
            <a key={href} href={href} className={styles.link}>
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={styles.burger}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className={mobileOpen ? styles.burgerOpen : ''} />
          <span className={mobileOpen ? styles.burgerOpen : ''} />
          <span className={mobileOpen ? styles.burgerOpen : ''} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            key="mobile-menu"
            className={styles.mobile}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={styles.mobileLink}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
