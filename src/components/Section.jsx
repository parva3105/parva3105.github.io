import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function Section({ id, title, subtitle, children, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id={id} ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.h2 variants={fadeIn} className="section-title">
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p variants={fadeIn} className="section-subtitle">
            {subtitle}
          </motion.p>
        )}
        {children}
      </motion.div>
    </section>
  )
}
