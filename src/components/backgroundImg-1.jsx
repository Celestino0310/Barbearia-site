import styles from '../styles/backgroundImg-1.module.css';
//TENSO TER QUE CORRIGIR ISSO
export function BackgroudImg1() {
	return (

		<section className={styles['sec-img']} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Images/Back.jpg)` }}>
			<div className={styles['section-img']}>
				<div className={styles['division-img']}>
					<h2>Making You Look Good <br></br>Is In Our Haritage</h2>
					<p>Barber is a person whose occupation is mainly to cut dress groom
						style and shave men's and boys hair.</p>
					<div>
						<a href="#appontament" className={styles['btn-s']}>
							MAKE APPOINTMENT
						</a>
					</div>
				</div>

			</div>


		</section>
	);
}
