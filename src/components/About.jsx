import { motion } from 'framer-motion'
import Section from './Section'
import styles from './About.module.css'

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

export default function About() {
  return (
    <Section
      id="about"
      title="About"
      subtitle="Software Engineer with a passion for scalable systems, ML, and clean code."
    >
      <motion.div className={styles.grid} variants={fadeIn}>
        <div className={styles.card}>
          <p>
            I'm Parva Shah, a Software Engineer with an MS in Software Engineering from Rochester Institute of Technology.
            I've built production systems at scale—from AWS pipelines processing 10K+ daily requests to ML models
            achieving 96% accuracy—and I love turning complex problems into reliable, maintainable software.
          </p>
          <p>
            I've worked across full‑stack development, ML research, DevOps, and data engineering. Whether it's
            migrating models to AWS Bedrock, reverse‑engineering WeChat mini‑apps, or shipping payment analytics
            that improve customer experience by 80%, I focus on impact and execution.
          </p>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>5+</span>
            <span className={styles.statLabel}>Years experience</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>10+</span>
            <span className={styles.statLabel}>Projects shipped</span>
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
