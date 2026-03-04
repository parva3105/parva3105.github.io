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
      subtitle="Academic background and relevant coursework."
    >
      <div className={styles.grid}>
        {education.map((entry) => (
          <motion.div key={entry.school} className={styles.card} variants={fadeIn}>
            <div className={styles.header}>
              <div className={styles.info}>
                <h3 className={styles.degree}>{entry.degree}</h3>
                <p className={styles.school}>{entry.school}</p>
                <div className={styles.metaRow}>
                  <span className={styles.location}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    {entry.location}
                  </span>
                  <span className={styles.period}>{entry.period}</span>
                </div>
              </div>
              {entry.gpa && (
                <div className={styles.gpaBadge}>
                  <span className={styles.gpaValue}>{entry.gpa}</span>
                  <span className={styles.gpaLabel}>GPA</span>
                </div>
              )}
            </div>
            {entry.courses && entry.courses.length > 0 && (
              <div className={styles.courses}>
                <p className={styles.coursesLabel}>Relevant Coursework</p>
                <div className={styles.courseTags}>
                  {entry.courses.map((course) => (
                    <span key={course} className={styles.courseTag}>{course}</span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
