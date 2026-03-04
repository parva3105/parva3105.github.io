import { motion } from 'framer-motion'
import Section from './Section'
import { projects } from '../data/projects'
import styles from './Projects.module.css'

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Academic and side projects — full-stack, ML, and infrastructure."
    >
      <div className={styles.grid}>
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            className={styles.card}
            variants={fadeIn}
          >
            <div className={styles.cardHeader}>
              <span className={styles.number}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <svg className={styles.folderIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" /></svg>
            </div>
            <h3 className={styles.name}>{project.name}</h3>
            <p className={styles.desc}>{project.description}</p>
            <div className={styles.tech}>
              {project.tech.map((t) => (
                <span key={t} className={styles.tag}>
                  {t}
                </span>
              ))}
            </div>
            {project.tags && (
              <div className={styles.tags}>
                {project.tags.map((t) => (
                  <span key={t} className={styles.tagSmall}>
                    {t}
                  </span>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
