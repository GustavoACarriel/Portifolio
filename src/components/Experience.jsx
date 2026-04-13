import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { EXPERIENCES } from '../constants';
import styles from './Experience.module.css';

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experiência</h2>
          <div className="section-line" />

          <div className={styles.timeline}>
            {EXPERIENCES.map(({ company, role, period, description, techs }, i) => (
              <motion.div
                key={company}
                className={styles.item}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className={styles.dot} />
                <div className={styles.card}>
                  <div className={styles.header}>
                    <div>
                      <h3 className={styles.company}>{company}</h3>
                      <p className={styles.role}>{role}</p>
                    </div>
                    <span className={styles.period}>{period}</span>
                  </div>
                  <p className={styles.description}>{description}</p>
                  <div className={styles.techs}>
                    {techs.map(tech => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
