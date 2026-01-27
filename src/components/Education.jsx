import { motion } from 'framer-motion'
import Section from './Section'
import styles from './Education.module.css'

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

const courses = [
  'Software Architecture',
  'Software Construction',
  'Database Design',
  'Data Analytics',
  'Collaborative Software Development',
  'Software Quality Assurance',
  'Visual Analytics',
]

export default function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Rochester Institute of Technology."
    >
      <motion.div className={styles.card} variants={fadeIn}>
        <div className={styles.header}>
          <h3 className={styles.degree}>Master of Science in Software Engineering</h3>
          <p className={styles.school}>Rochester Institute of Technology</p>
          <p className={styles.location}>Rochester, NY, USA</p>
        </div>
        <div className={styles.gpa}>GPA 3.4</div>
        <p className={styles.coursesLabel}>Relevant courses</p>
        <ul className={styles.courses}>
          {courses.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </motion.div>
    </Section>
  )
}
