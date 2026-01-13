import styles from '../styles/widget.module.css';

export function Widget() {
    return( 
        
			<section className="section-widget">
				<div className="Div-container">

					{/* BLOCO 1 — Logo + texto + redes */}
					<div className="Div-container-spaces">
						<img className='logo-foot' src={`${process.env.PUBLIC_URL}/Images/logo.png`} alt="Logo" />

						<p>
							Our barbershop is the created for men who appreciate premium quality,
							time and flawless look.
						</p>

						<ul className="ul-icons">
							<li className="icons">
								<i className="fab fa-facebook"></i>
							</li>

							<li className="icons">
								<i className="fab fa-twitter"></i>
							</li>

							<li className="icons">
								<i className="fab fa-google"></i>
							</li>

							<li className="icons">
								<i className="fab fa-instagram"></i>
							</li>

							<li className="icons">
								<i className="fab fa-linkedin"></i>
							</li>
						</ul>
					</div>

					{/* BLOCO 2 — Endereço */}
					<div className="Div-container-spaces">
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
					<div className="Div-container-spaces">
						<h3>Opening Hours</h3>

						<ul>
							<li>Monday - Friday: 11:30am - 8:00pm</li>
							<li>Saturday: 9am - 8pm</li>
							<li>Monday - Friday: 5:30am - 11:00pm</li>
							<li>Saturday - Sunday: 4:30am - 1:00pm</li>
						</ul>
					</div>

					{/* BLOCO 4 — Newsletter */}
					<div className="Div-container-spaces">
						<h3>Subscribe to our contents</h3>

						<input placeholder="Email adress..." />
						<button className="footer-btn" type="submit">SUBSCRIBE</button>
					</div>

				</div>
			</section>
    );
}