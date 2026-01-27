import { motion } from 'framer-motion'
import Section from './Section'
import { skills } from '../data/skills'
import styles from './Skills.module.css'

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

const groups = [
  { label: 'Languages', items: skills.languages },
  { label: 'Frameworks', items: skills.frameworks },
  { label: 'AI / ML', items: skills.aiMl },
  { label: 'Datastores', items: skills.datastores },
  { label: 'DevOps', items: skills.devops },
]

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Tech I work with daily."
    >
      <div className={styles.grid}>
        {groups.map(({ label, items }) => (
          <motion.div
            key={label}
            className={styles.group}
            variants={fadeIn}
          >
            <h3 className={styles.label}>{label}</h3>
            <div className={styles.tags}>
              {items.map((item) => (
                <span key={item} className={styles.tag}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
