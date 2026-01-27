import { motion } from 'framer-motion'
import Section from './Section'
import { experience } from '../data/experience'
import styles from './Experience.module.css'

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Roles across startups, research, and industry."
    >
      <div className={styles.timeline}>
        {experience.map((job, i) => (
          <motion.article
            key={job.company}
            className={styles.job}
            variants={fadeIn}
          >
            <div className={styles.badge} />
            <div className={styles.content}>
              <div className={styles.header}>
                <div>
                  <h3 className={styles.role}>{job.role}</h3>
                  <p className={styles.company}>{job.company}</p>
                </div>
                <div className={styles.meta}>
                  <span className={styles.location}>{job.location}</span>
                  <span className={styles.period}>{job.period}</span>
                </div>
              </div>
              <ul className={styles.points}>
                {job.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
