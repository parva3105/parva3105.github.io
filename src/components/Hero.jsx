import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import Scene3D from './Scene3D'
import styles from './Hero.module.css'

export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section className={styles.hero} id="home">
      {!prefersReducedMotion && (
        <div className={styles.canvasWrap}>
          <Canvas
            camera={{ position: [0, 0, 8], fov: 55 }}
            dpr={[1, 2]}
            gl={{ alpha: true, antialias: true }}
            className={styles.canvas}
          >
            <color attach="background" args={['transparent']} />
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </Canvas>
        </div>
      )}

      <div className={styles.content}>
        <motion.p
          className={styles.greeting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm
        </motion.p>
        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Parva Shah
        </motion.h1>
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Software Engineer
        </motion.p>
        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Building scalable systems, ML pipelines & full‑stack apps.
        </motion.p>
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#projects" className={styles.btnPrimary}>
            View work
          </a>
          <a href="#contact" className={styles.btnSecondary}>
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </motion.div>
    </section>
  )
}
