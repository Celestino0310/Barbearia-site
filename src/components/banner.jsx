import styles from '../styles/banner.module.css';

export function Banner() {
    return ( 
			<section className={styles.banner}>

				<div className={styles['bannerContent']+' animate-on-scroll fade-in' }>
					<h3> Introducing </h3>
					<h2>The barber shop<br></br>Since 1996 </h2>
					<img className={styles['about-logo']} src={`${process.env.PUBLIC_URL}/Images/about-logo.png`} alt="Logo da barbearia" />
					<p> Barber is a person whose occupation is mainly to cut dress groom style and shave men's and boys' hair. A barber's place of work is known as a "barbershop" or a "barber's". Barbershops are also places of social interaction and public discourse. In some instances, barbershops are also public forums. </p>
					<a href="#service" className={styles['btnA']}> MORE ABOUT US </a>
				</div>

				<div className={styles['bannerImages']+' animate-on-scroll fade-in'}>
					<img className={styles.about01} src={`${process.env.PUBLIC_URL}/Images/about-1.jpg`} alt="Imagem de uma barbearia" />
					<img className={styles.about02} src={`${process.env.PUBLIC_URL}/Images/about-2.jpg`} alt="Imagem de uma barbearia" />
					<img className={styles.about03} src={`${process.env.PUBLIC_URL}/Images/about-3.jpg`} alt="Imagem de uma barbearia" />
				</div>
			</section>
    );
}