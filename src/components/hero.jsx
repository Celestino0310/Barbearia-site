import styles from '../styles/hero.module.css';

export function Hero () {
    return ( 



			<section className={styles.hero}>
				<div className={styles['hero-content']}>
					<h3>Trendy Salon & Spa </h3>
					<h2> Our Services </h2>
					<div className={styles['heading-line']}>
						<img src={`${process.env.PUBLIC_URL}/Images/heading-line.png`} alt="line" />
					</div>
				</div>
				<div className={styles['hero-text']}>
					<div className={styles['hero-box']}>

						<img src={`${process.env.PUBLIC_URL}/Images/razor-1.png`} className={styles['bi-scissors']} alt="razor" />
						<h2> Haircut Styles</h2>
						<p> Barber is a person whose occupation is mainly to cut dress style. </p>
					</div>
					<div className={styles['hero-box']}>
						<img src={`${process.env.PUBLIC_URL}/Images/razor-2.png`} className={styles['bi-scissors']} alt="razor" />
						<h2> Beard Triming</h2>
						<p> Barber is a person whose occupation is mainly to cut dress style. </p>
					</div>
					<div className={styles['hero-box']}>
						<img src={`${process.env.PUBLIC_URL}/Images/razor-3.png`} className={styles['bi-scissors']} alt="razor" />
						<h2> Smooth Shave</h2>
						<p>Barber is a person whose occupation is mainly to cut dress style. </p>
					</div>
					<div className={styles['hero-box']}>
						<img src={`${process.env.PUBLIC_URL}/Images/razor-4.png`} className={styles['bi-scissors']} alt="razor" />
						<h2> Face Masking </h2>
						<p> Barber is a person whose occupation is mainly to cut dress groom style. </p>
					</div>

				</div>
			</section>
    );
}