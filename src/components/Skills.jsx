import { motion } from 'framer-motion'
import Section from './Section'
import { skills } from '../data/skills'
import styles from './Skills.module.css'

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

const groups = [
  { label: 'Languages', icon: '💻', items: skills.languages },
  { label: 'Cloud & Infra', icon: '☁️', items: skills.cloudInfra },
  { label: 'Frameworks', icon: '⚙️', items: skills.frameworks },
  { label: 'Analytics', icon: '📊', items: skills.analytics },
  { label: 'AI / ML', icon: '🤖', items: skills.aiMl },
  { label: 'Datastores', icon: '🗄️', items: skills.datastores },
]

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Technologies and tools I work with."
    >
      <div className={styles.grid}>
        {groups.map(({ label, icon, items }) => (
          <motion.div
            key={label}
            className={styles.group}
            variants={fadeIn}
          >
            <div className={styles.groupHeader}>
              <span className={styles.groupIcon}>{icon}</span>
              <h3 className={styles.label}>{label}</h3>
            </div>
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
