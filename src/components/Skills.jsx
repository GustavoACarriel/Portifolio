import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SKILLS } from '../constants';
import styles from './Skills.module.css';

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section className="section" id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills</h2>
          <div className="section-line" />

          <div className={styles.grid}>
            {SKILLS.map(({ name, level, color }, i) => (
              <motion.div
                key={name}
                className={styles.skillItem}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <div className={styles.skillHeader}>
                  <span className={styles.skillName}>{name}</span>
                  <span className={styles.skillLevel}>{level}%</span>
                </div>
                <div className={styles.barBg}>
                  <motion.div
                    className={styles.barFill}
                    style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${level}%` } : {}}
                    transition={{ duration: 0.8, delay: i * 0.07 + 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
