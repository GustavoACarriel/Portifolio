import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './Hero.module.css';

const SOCIAL = [
  { icon: <FiGithub />, href: 'https://github.com/GustavoACarriel', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://linkedin.com/in/gustavocarriel', label: 'LinkedIn' },
  { icon: <FiMail />, href: 'mailto:gucarriel@hotmail.com', label: 'Email' },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.glow} />

      <div className={`container ${styles.content}`}>
        <motion.p
          className={styles.greeting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Olá, eu sou
        </motion.p>

        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Gustavo Carriel
        </motion.h1>

        <motion.h2
          className={styles.role}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Backend Developer · Python · Java
        </motion.h2>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Desenvolvedor Backend com 3+ anos de experiência criando APIs RESTful
          escaláveis e seguras. Especializado em Python, Django, Java e Spring Boot.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="projects" smooth duration={600} offset={-70}>
            <button className={styles.btnPrimary}>Ver Projetos</button>
          </Link>
          <Link to="contact" smooth duration={600} offset={-70}>
            <button className={styles.btnSecondary}>Entre em Contato</button>
          </Link>
        </motion.div>

        <motion.div
          className={styles.social}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {SOCIAL.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>

      <div className={styles.scroll}>
        <Link to="about" smooth duration={600} offset={-70}>
          <div className={styles.scrollDot} />
        </Link>
      </div>
    </section>
  );
}
