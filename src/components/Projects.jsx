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
      subtitle="Academic and side projects—full‑stack, ML, and infrastructure."
    >
      <div className={styles.grid}>
        {projects.map((project) => (
          <motion.article
            key={project.name}
            className={styles.card}
            variants={fadeIn}
          >
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
