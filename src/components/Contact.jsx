import { motion } from 'framer-motion'
import Section from './Section'
import styles from './Contact.module.css'

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

const links = [
  { href: 'https://parva-shah.vercel.app/', label: 'Portfolio', icon: '↗' },
  { href: 'https://github.com/parva3105', label: 'GitHub', icon: '↗' },
  { href: 'mailto:work.parry@gmail.com', label: 'work.parry@gmail.com', icon: '✉' },
  { href: 'tel:+18484820769', label: '(848) 482-0769', icon: '📞' },
  { href: 'https://www.linkedin.com/in/parva-shah', label: 'LinkedIn', icon: '↗' },
]

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Get in touch"
      subtitle="Open to roles and collaboration. Say hi."
    >
      <motion.div className={styles.wrap} variants={fadeIn}>
        <div className={styles.links}>
          {links.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={styles.link}
            >
              <span className={styles.icon}>{icon}</span>
              <span>{label}</span>
            </a>
          ))}
        </div>
        <p className={styles.footer}>
          Built with React, Three.js & Vercel. © {new Date().getFullYear()} Parva Shah.
        </p>
      </motion.div>
    </Section>
  )
}
