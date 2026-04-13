import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { useInView } from '../hooks/useInView';
import styles from './Contact.module.css';

const CONTACTS = [
  { icon: <FiMail />, label: 'Email', value: 'gucarriel@hotmail.com', href: 'mailto:gucarriel@hotmail.com' },
  { icon: <FiPhone />, label: 'WhatsApp', value: '+55 11 95386-0412', href: 'https://wa.me/5511953860412' },
  { icon: <FiLinkedin />, label: 'LinkedIn', value: 'gustavocarriel', href: 'https://linkedin.com/in/gustavocarriel' },
  { icon: <FiGithub />, label: 'GitHub', value: 'GustavoACarriel', href: 'https://github.com/GustavoACarriel' },
];

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Contato</h2>
          <div className="section-line" />

          <div className={styles.wrapper}>
            <div className={styles.text}>
              <h3>Vamos trabalhar juntos?</h3>
              <p>
                Estou aberto a novas oportunidades. Se tiver um projeto
                interessante ou uma vaga em aberto, fique à vontade para entrar
                em contato!
              </p>
            </div>

            <div className={styles.cards}>
              {CONTACTS.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactCard}
                >
                  <span className={styles.contactIcon}>{icon}</span>
                  <div>
                    <span className={styles.contactLabel}>{label}</span>
                    <span className={styles.contactValue}>{value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
