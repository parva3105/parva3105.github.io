import { motion } from 'framer-motion'
import Section from './Section'
import { contact } from '../data/contact'
import styles from './Contact.module.css'

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

const links = [
  { href: `mailto:${contact.email}`, label: contact.email, icon: 'Email' },
  { href: contact.phoneHref, label: contact.phone, icon: 'Phone' },
  { href: contact.linkedin, label: 'LinkedIn', icon: 'Link' },
]

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Get in touch"
      subtitle="Open to roles and collaboration."
    >
      <motion.div className={styles.wrap} variants={fadeIn}>
        <p className={styles.name}>{contact.name}</p>
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
          Built with React, Three.js and Vercel. Copyright {new Date().getFullYear()} {contact.name}.
        </p>
      </motion.div>
    </Section>
  )
}
