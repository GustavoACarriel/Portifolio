import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.text}>
          Desenvolvido por <span>Gustavo Carriel</span> · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
