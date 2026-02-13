import { motion } from 'framer-motion'
import Section from './Section'
import { education } from '../data/education'
import styles from './Education.module.css'

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

export default function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Academic background"
    >
      {education.map((entry) => (
        <motion.div key={entry.school} className={styles.card} variants={fadeIn}>
          <div className={styles.header}>
            <h3 className={styles.degree}>{entry.degree}</h3>
            <p className={styles.school}>{entry.school}</p>
            <p className={styles.location}>{entry.location}</p>
            <p className={styles.period}>{entry.period}</p>
          </div>
        </motion.div>
      ))}
    </Section>
  )
}
