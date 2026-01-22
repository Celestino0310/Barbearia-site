import styles from '../styles/widget.module.css';

export function Widget() {
    return( 
        
			<section id='contact' className={styles['section-widget']}>
				<div className={styles['Div-container']}>

					{/* BLOCO 1 — Logo + texto + redes */}
					<div className={styles['Div-container-spaces']}>
						<img className={styles['logo-foot']} src={`${process.env.PUBLIC_URL}/Images/logo.png`} alt="Logo" />

						<p>
							Our barbershop is the created for men who appreciate premium quality,
							time and flawless look.
						</p>

						<ul className={styles['ul-icons']}>
							<li className={styles['icons']}>
								<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
									<i className="fab fa-facebook"></i>
								</a>
							</li>

							<li className={styles['icons']}	>
								<a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
									<i className="fab fa-twitter"></i>
								</a>
							</li>

							<li className={styles['icons']}>
								<a href="https://github.com/Celestino0310" target="_blank" rel="noopener noreferrer">
									<i className="fab fa-google"></i>
								</a>
							</li>

							<li className={styles['icons']}>
								<a href="https://www.instagram.com/celes.tino0310/?next=%2F" target="_blank" rel="noopener noreferrer">
									<i className="fab fa-instagram"></i>
								</a>
							</li>

							<li className={styles['icons']}>
								<a href="https://www.linkedin.com/in/devgabrielcelestino/" target="_blank" rel="noopener noreferrer">
									<i className="fab fa-linkedin"></i>
								</a>
							</li>
						</ul>
					</div>

					{/* BLOCO 2 — Endereço */}
					<div className={styles['Div-container-spaces']}>
						<h3>Headquarters</h3>

						<p>
							962 Fifth Avenue, 3rd Floor <br />
							New York, NY 10022
						</p>

						<p>
							Hello@dynamiclayers.net <br />
							(+123) 456 789 101
						</p>
					</div>

					{/* BLOCO 3 — Horários */}
					<div className={styles['Div-container-spaces']}>
						<h3>Opening Hours</h3>

						<ul>
							<li>Monday - Friday: 11:30am - 8:00pm</li>
							<li>Saturday: 9am - 8pm</li>
							<li>Monday - Friday: 5:30am - 11:00pm</li>
							<li>Saturday - Sunday: 4:30am - 1:00pm</li>
						</ul>
					</div>

					{/* BLOCO 4 — Newsletter */}
					<div className={styles['Div-container-spaces']}>
						<h3>Subscribe to our contents</h3>

						<input placeholder="Email adress..." />
						<button className={styles['footer-btn']} type="submit">SUBSCRIBE</button>
					</div>

				</div>
			</section>
    );
}