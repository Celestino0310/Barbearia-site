import styles from '../styles/scroll.module.css';

export function Scroll() {

    return ( 
			<section className={styles.Scroll}>
				<div className={styles['Scroll-container']}>
					<div className={styles['Scroll-item']}> <img src={`${process.env.PUBLIC_URL}/Images/sponsor-1.png`} alt='imagem' /> </div>
					<div className={styles['Scroll-item']}> <img src={`${process.env.PUBLIC_URL}/Images/sponsor-2.png`} alt='imagem' /> </div>
					<div className={styles['Scroll-item']}> <img src={`${process.env.PUBLIC_URL}/Images/sponsor-3.png`} alt='imagem' /> </div>
					<div className={styles['Scroll-item']}> <img src={`${process.env.PUBLIC_URL}/Images/sponsor-4.png`} alt='imagem' /> </div>
					<div className={styles['Scroll-item']}> <img src={`${process.env.PUBLIC_URL}/Images/sponsor-5.png`} alt='imagem' /> </div>
					<div className={styles['Scroll-item']}> <img src={`${process.env.PUBLIC_URL}/Images/sponsor-1.png`} alt='imagem' /> </div>
					<div className={styles['Scroll-item']}> <img src={`${process.env.PUBLIC_URL}/Images/sponsor-2.png`} alt='imagem' /> </div>
					<div className={styles['Scroll-item']}> <img src={`${process.env.PUBLIC_URL}/Images/sponsor-3.png`} alt='imagem' /> </div>
					<div className={styles['Scroll-item']}> <img src={`${process.env.PUBLIC_URL}/Images/sponsor-4.png`} alt='imagem' /> </div>
					<div className={styles['Scroll-item']}> <img src={`${process.env.PUBLIC_URL}/Images/sponsor-5.png`} alt='imagem' /> </div>
				</div>
			</section>
    );
}