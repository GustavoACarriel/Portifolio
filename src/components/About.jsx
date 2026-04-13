import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import styles from './About.module.css';

const STATS = [
  { value: '3+', label: 'Anos de experiência' },
  { value: '10+', label: 'Tecnologias' },
  { value: '3', label: 'Empresas' },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Sobre mim</h2>
          <div className="section-line" />

          <div className={styles.grid}>
            <div className={styles.text}>
              <p>
                Sou um desenvolvedor backend apaixonado por criar sistemas
                eficientes e escaláveis. Com mais de 3 anos de experiência,
                trabalhei em projetos que vão desde automação de processos
                industriais até plataformas SaaS multi-tenant.
              </p>
              <p>
                Minha stack principal é <strong>Python/Django</strong> e{' '}
                <strong>Java/Spring Boot</strong>, com forte base em arquitetura
                de software, design patterns, bancos relacionais e APIs RESTful.
              </p>
              <p>
                Formado em Análise e Desenvolvimento de Sistemas pela{' '}
                <strong>São Paulo Tech School</strong>, atualmente trabalho na
                SHEIN desenvolvendo soluções internas que otimizam operações
                logísticas.
              </p>
              <div className={styles.tags}>
                <span className="tag">Scrum</span>
                <span className="tag">Kanban</span>
                <span className="tag">REST API</span>
                <span className="tag">Clean Code</span>
                <span className="tag">Design Patterns</span>
              </div>
            </div>

            <div className={styles.stats}>
              {STATS.map(({ value, label }) => (
                <div key={label} className={styles.statCard}>
                  <span className={styles.statValue}>{value}</span>
                  <span className={styles.statLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
