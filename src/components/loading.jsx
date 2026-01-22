import styles from '../styles/loading.module.css';
import { useState, useEffect } from 'react';

export function Loading() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Exemplo de 3 segundos de delay

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) {
        return null; // Quando terminar o loading, não renderiza nada
    }

    return (
        <div className={styles.load}>
            <div className={styles.loading}>
                <span className={styles.circulo}></span><span className={styles.circulo2}></span>
            </div>
            
        </div >
    );


}
