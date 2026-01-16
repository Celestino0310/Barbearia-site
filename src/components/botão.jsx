import { useState, useEffect } from "react";
import styles from "../styles/botão.module.css";

export function Botão() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`${styles['scroll-to-top']} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
      title="Voltar ao topo"
    >
      ↑
    </button>
  );
}