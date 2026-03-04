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
      subtitle="Roles spanning software engineering, consulting, and research."
    >
      <div className={styles.timeline}>
        {experience.map((job, i) => (
          <motion.article
            key={job.company}
            className={styles.job}
            variants={fadeIn}
          >
            <div className={styles.lineWrap}>
              <div className={styles.badge}>
                <span className={styles.badgeInner} />
              </div>
              {i < experience.length - 1 && <div className={styles.line} />}
            </div>
            <div className={styles.content}>
              <div className={styles.header}>
                <div>
                  <h3 className={styles.role}>{job.role}</h3>
                  <p className={styles.company}>{job.company}</p>
                </div>
                <div className={styles.meta}>
                  <span className={styles.location}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    {job.location}
                  </span>
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
