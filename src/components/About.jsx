import { motion } from 'framer-motion'
import Section from './Section'
import { contact } from '../data/contact'
import styles from './About.module.css'

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

const highlights = [
  { icon: '☁️', label: 'Cloud & Infra', desc: 'AWS, GCP, Docker, K8s' },
  { icon: '⚡', label: 'Full-Stack', desc: 'React, Django, Node.js' },
  { icon: '🤖', label: 'AI / ML', desc: 'NLP, PyTorch, TensorFlow' },
  { icon: '📊', label: 'Consulting', desc: 'Stakeholder-driven delivery' },
]

export default function About() {
  return (
    <Section
      id="about"
      title="About"
      subtitle="A blend of engineering depth and consulting acumen."
    >
      <motion.div className={styles.grid} variants={fadeIn}>
        <div className={styles.card}>
          {contact.aboutText.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
        <div className={styles.sidebar}>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>4+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>6+</span>
              <span className={styles.statLabel}>Roles Held</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>2</span>
              <span className={styles.statLabel}>Degrees</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div className={styles.highlights} variants={fadeIn}>
        {highlights.map(({ icon, label, desc }) => (
          <div key={label} className={styles.highlight}>
            <span className={styles.highlightIcon}>{icon}</span>
            <div>
              <span className={styles.highlightLabel}>{label}</span>
              <span className={styles.highlightDesc}>{desc}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </Section>
  )
}
