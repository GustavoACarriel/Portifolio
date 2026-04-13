import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useInView } from '../hooks/useInView';
import { PROJECTS } from '../constants';
import styles from './Projects.module.css';

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section className="section" id="projects" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projetos</h2>
          <div className="section-line" />

          <div className={styles.grid}>
            {PROJECTS.map(({ title, description, techs, github, demo }, i) => (
              <motion.div
                key={title}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className={styles.cardTop}>
                  <span className={styles.cardIcon}>{'{ }'}</span>
                  <div className={styles.cardLinks}>
                    {github && (
                      <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FiGithub />
                      </a>
                    )}
                    {demo && (
                      <a href={demo} target="_blank" rel="noopener noreferrer" aria-label="Demo">
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{description}</p>
                <div className={styles.techs}>
                  {techs.map(tech => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
