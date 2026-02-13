import { motion } from 'framer-motion'
import Section from './Section'
import { contact } from '../data/contact'
import styles from './About.module.css'

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

export default function About() {
  return (
    <Section
      id="about"
      title="About"
      subtitle={contact.aboutSubtitle}
    >
      <motion.div className={styles.grid} variants={fadeIn}>
        <div className={styles.card}>
          <p>
            I am {contact.name}, a {contact.role} with a Master of Science in Software Engineering from Rochester Institute of Technology.
            My experience spans software engineering, machine learning research, and cloud systems.
          </p>
          <p>
            Recent work includes AWS data pipelines, large-scale reverse engineering and API tracing, model migration to AWS Bedrock,
            and payment infrastructure optimization across multiple platforms.
          </p>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>5</span>
            <span className={styles.statLabel}>Roles listed</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>2</span>
            <span className={styles.statLabel}>Degrees</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>RIT</span>
            <span className={styles.statLabel}>MS Software Eng.</span>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
