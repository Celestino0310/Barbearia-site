import './App.css';
import React, {useRef, useState } from 'react';
import './index.js';


/* inicio*/

/* aplicação Main */
function App() {
	const [imgAtiva, setImgAtiva] = useState(1);
     // corrige esses erros ai 
     useRef();

	const imagens = [
		{ src: '/Images/about-2.jpg', alt: 'Our hair style enhances your smile' },
		{ src: '/Images/about-1.jpg', alt: 'Lorem ipsum dolor sit amet ' },
		{ src: '/Images/barbearia3.png', alt: 'lorem ipsum dolor sit amet sit alert' }
	];


	const avancar = () => {
		setImgAtiva((prev) => (prev + 1) % imagens.length);
	};

	const voltar = () => {
		setImgAtiva((prev) => (prev - 1 + imagens.length) % imagens.length);
	};



	//de
	document.addEventListener('DOMContentLoaded', function () {
		document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();

				const targetId = this.getAttribute('href').substring(1);
				const targetElement = document.getElementById(targetId);

				// Adiciona um pequeno delay antes de fazer o scroll suave
				setTimeout(function () {
					if (targetElement) {
						window.scrollTo({
							top: targetElement.offsetTop,
							behavior: 'smooth'
						});
					}
				}, 100); // Delay de 100 milissegundos
			});
		});
	});
	return (


		<div className="App">
			<header className="main">
				<div className="center">


					<div className="logo">
						<img src={`${process.env.PUBLIC_URL}/Images/logo.png`} className="App-logo" alt="logo" />
					</div>
					<nav className='navegation'>s
						<div>
							<ul className="options"  >

								<li><a href="#home">HOME</a></li>
								<li><a href="#service">ABOUT</a></li>
								<li><a href="#home">SERVICES</a></li>
								<li><a href="#service">PAGES</a></li>
								<li><a href="#service">BLOG</a></li>
								<li><a href="#home">CONTACT</a></li>

							</ul>
						</div>
						<div className="header-btn">
							<a href='#Appontament'>MAKE APPONTAMENT </a>

						</div>
					</nav>

				</div>
			</header>

			<section className='slider'>
				<div className='interface'>
					<div className="slider-container">
						{imagens.map((img, index) => (
							<div key={index} className={`slider-box ${index === imgAtiva ? 'ativo' : ''}`}>
								<img src={`${process.env.PUBLIC_URL}${img.src}`} alt={img.alt} />
								<div className='texto-slider'>
									<h2>{img.alt}</h2>
									<p>Your Style, Our Passion</p>



									<a href="#Appontament" className='btn-s'> MAKE APPONTAMENT </a>
								</div>
							</div>
						))}
					</div>

					<div className='setas'>
						<button onClick={voltar}><i className="bi bi-caret-left-fill"></i></button>
						<button onClick={avancar}><i className="bi bi-caret-right-fill"></i></button>
					</div>
				</div>
			</section>

			<section className='banner'>

				<div className='banner-content'>
					<h3> Introducing </h3>
					<h2>The barber shop<br></br>Science 2026 </h2>
					<img className="about-logo" src={`${process.env.PUBLIC_URL}/Images/about-logo.png`} alt="Logo da barbearia" />
					<p> Barber is a person whose occupation is mainly to cut dress groom style and shave men's and boys' hair. A barber's place of work is known as a "barbershop" or a "barber's". Barbershops are also places of social interaction and public discourse. In some instances, barbershops are also public forums. </p>
					<a href="#service" className='btn-a'> MORE ABOUT US </a>
				</div>

				<div className="banner-images">
					<img className="about01" src={`${process.env.PUBLIC_URL}/Images/about-1.jpg`} alt="Imagem de uma barbearia" />
					<img className="about02" src={`${process.env.PUBLIC_URL}/Images/about-2.jpg`} alt="Imagem de uma barbearia" />
					<img className="about03" src={`${process.env.PUBLIC_URL}/Images/about-3.jpg`} alt="Imagem de uma barbearia" />
				</div>
			</section>

			<section className='hero'>
				<div className="hero-content">
					<h3>Trendy Salon & Spa </h3>
					<h2> Our Services </h2>
					<div className="heading-line">
						<img src={`${process.env.PUBLIC_URL}/Images/heading-line.png`} alt="line" />
					</div>
				</div>
				<div className="hero-text">
					<div className='hero-box'>

						<img src={`${process.env.PUBLIC_URL}/Images/razor-1.png`} className="bi-scissors" alt="razor" />
						<h2> Haircut Styles</h2>
						<p> Barber is a person whose occupation is mainly to cut dress style. </p>
					</div>
					<div className='hero-box'>
						<img src={`${process.env.PUBLIC_URL}/Images/razor-2.png`} className="bi-scissors" alt="razor" />
						<h2> Beard Triming</h2>
						<p> Barber is a person whose occupation is mainly to cut dress style. </p>
					</div>
					<div className='hero-box'>
						<img src={`${process.env.PUBLIC_URL}/Images/razor-3.png`} className="bi-scissors" alt="razor" />
						<h2> Smooth Shave</h2>
						<p>Barber is a person whose occupation is mainly to cut dress style. </p>
					</div>
					<div className='hero-box'>
						<img src={`${process.env.PUBLIC_URL}/Images/razor-4.png`} className="bi-scissors" alt="razor" />
						<h2> Face Masking </h2>
						<p> Barber is a person whose occupation is mainly to cut dress groom style. </p>
					</div>

				</div>
			</section>
			<section id="Appontament" className='Appontament'>
				{/* LADO ESQUERDO */}
				<div className="Div-Apponntament">

					<img
						className="Img-Appontament"
						src={`${process.env.PUBLIC_URL}/Images/barbearia3.png`}
						alt="Barbearia"
					/>
				</div>
				{/* LADO DIREITO */}
				<div className="Formulario">
					<h2>Make an Appointment</h2>


					<p>
						Barber is a person whose occupation is mainly to cut dress groom
						style and shave men's and boys hair.
					</p>

					<form>
						<input placeholder="Name" />
						<input placeholder="Your Email" />
						<input placeholder="Your Phone No" />
						<input placeholder="Your Free Time" />

						<select>
							<option>Services</option>

							<option value="hair-styling">Hair Styling</option>
							<option value="shaving">Shaving</option>
							<option value="face-mask">Face Mask</option>
							<option value="hair-wash">Hair Wash</option>
							<option value="beard-trimming">Beard Trimming</option>
						</select>

						<select>
							<option>Choose Barbers</option>
							<option value="michel-brown">Michel Brown</option>
							<option value="jonathan-smith">Jonathan Smith</option>
							<option value="jack-tosan">Jack Tosan</option>
							<option value="martin-lane">Martin Lane</option>
						</select>

						<button type="submit">SUBMIT APPOINTMENT</button>
					</form>


				</div>


			</section >

			<section id="service" className="services_section">
				<div className="hero-content">
					<h3>Trendy Salon & Spa </h3>
					<h2> Our Barbers </h2>
					<div className="heading-line">
						<img src={`${process.env.PUBLIC_URL}/Images/heading-line.png`} alt="line" />
					</div>
				</div>

			</section>



			<section id="team" className="team_section bd-bottom padding">
				<div className="container">

					<ul className="team_members row">
						<li className="col-lg-3 col-md-6 sm-padding wow fadeInUp" data-wow-delay="200ms">
							<div className="team_member">
								<img className='img-barber' src={`${process.env.PUBLIC_URL}/Images/team-3.jpg`} alt="Team Member" />
								<div className="overlay">
									<h3>Kyle Frederick</h3>
									<p>WEB DESIGNER</p>
								</div>
							</div>
						</li>

						<li className="col-lg-3 col-md-6 sm-padding wow fadeInUp" data-wow-delay="300ms">
							<div className="team_member">
								<img className='img-barber' src={`${process.env.PUBLIC_URL}/Images/team-1.jpg`} alt="Team Member" />
								<div className="overlay">
									<h3>José Carpio</h3>
									<p>WORDPRESS DEVELOPER</p>
								</div>
							</div>
						</li>

						<li className="col-lg-3 col-md-6 sm-padding wow fadeInUp" data-wow-delay="400ms">
							<div className="team_member">
								<img className='img-barber' src={`${process.env.PUBLIC_URL}/Images/team-2.jpg`} alt="Team Member" />
								<div className="overlay">
									<h3>Michel Ibáñez</h3>
									<p>ONLINE MARKETER</p>
								</div>
							</div>
						</li>

						<li className="col-lg-3 col-md-6 sm-padding wow fadeInUp" data-wow-delay="500ms">
							<div className="team_member">
								<img className='img-barber' src={`${process.env.PUBLIC_URL}/Images/team-4.jpg`} alt="Team Member" />
								<div className="overlay">
									<h3>Adam Castellon</h3>
									<p>JAVA SPECIALIST</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</section>
			<section className='price'>
				<div className="hero-content">
					<h3>Save 20% On Beauty Spa</h3>
					<h2> Our Barber Pricing </h2>
					<div className="heading-line">
						<img src={`${process.env.PUBLIC_URL}/Images/heading-line.png`} alt="line" />
					</div>
				</div>

				<div className="price-content">

					<div className='price-text'>

						<h3> Hair Styling </h3>
						<ul>

							<li className="price-item">
								<div className="price-line">
									<h4>Hair Cut</h4>

									<span className="line"></span>

									<span className="price">$8</span>
								</div>

								<p>
									Barber is a person whose occupation is mainly to cut dress groom style and shave men.
								</p>
							</li>
							<li className="price-item">
								<div className="price-line">
									<h4>Hair Styling</h4>

									<span className="line"></span>

									<span className="price">$9</span>
								</div>

								<p>
									Barber is a person whose occupation is mainly to cut dress groom style and shave men.
								</p>
							</li>
							<li className="price-item">
								<div className="price-line">
									<h4>Hair Triming</h4>

									<span className="line"></span>

									<span className="price">$10</span>
								</div>

								<p>
									Barber is a person whose occupation is mainly to cut dress groom style and shave men.
								</p>
							</li>

						</ul>
					</div>
					<div className='price-text'>

						<h3> Shaving </h3>
						<ul>

							<li className="price-item">
								<div className="price-line">
									<h4>Clean Shaving</h4>

									<span className="line"></span>

									<span className="price">$8</span>
								</div>

								<p>
									Barber is a person whose occupation is mainly to cut dress groom style and shave men.
								</p>
							</li>
							<li className="price-item">
								<div className="price-line">
									<h4>Beard Triming</h4>

									<span className="line"></span>

									<span className="price">$9</span>
								</div>

								<p>
									Barber is a person whose occupation is mainly to cut dress groom style and shave men.
								</p>
							</li>
							<li className="price-item">
								<div className="price-line">
									<h4>Smooth Shave</h4>

									<span className="line"></span>

									<span className="price">$10</span>
								</div>

								<p>
									Barber is a person whose occupation is mainly to cut dress groom style and shave men.
								</p>
							</li>

						</ul>
					</div>
					<div className='price-text'>

						<h3>Face Masking</h3>
						<ul>

							<li className="price-item">
								<div className="price-line">
									<h4>White Facial</h4>

									<span className="line"></span>

									<span className="price">$8</span>
								</div>

								<p>
									Barber is a person whose occupation is mainly to cut dress groom style and shave men.
								</p>
							</li>
							<li className="price-item">
								<div className="price-line">
									<h4>Face Cleaning</h4>

									<span className="line"></span>

									<span className="price">$10</span>
								</div>

								<p>
									Barber is a person whose occupation is mainly to cut dress groom style and shave men.
								</p>
							</li>
							<li className="price-item">
								<div className="price-line">
									<h4>Bright Tuning</h4>

									<span className="line"></span>

									<span className="price">$12</span>
								</div>

								<p>
									Barber is a person whose occupation is mainly to cut dress groom style and shave men.
								</p>
							</li>

						</ul>
					</div>



				</div>

			</section>
			<section className='Sec-img' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/Images/barbearia.jpg)`}}>
				<div className='section-img'>
					<div className='division-img'>
						<h2>Making You Look Good <br></br>Is In Our Haritage</h2>
						<p>Barber is a person whose occupation is mainly to cut dress groom
							style and shave men's and boys hair.</p>
						<div>
							<a href="#Appontament" className='btn-s'> MAKE APPONTAMENT </a>
						</div>
					</div>

				</div>


			</section>
			<section className='Blog-section'>
				<div className='Blog'>
					<div className='Blog-title'>
						<h3> From Blog</h3>
						<h2>A Good Newspaper Is A<br></br>
							Nation Talking To Itself </h2>
					</div>
					<div className='Blog-container'>

                        <div className='Blog-item'>

                            <img
                                className="Img-Blog"
                                src={`${process.env.PUBLIC_URL}/Images/post-1.jpg`}
                                alt="Barbearia" />

                            <div className='Blog-text'>
                                <a href="#blog" className='Blog-text-indication'> INTERIOR </a>
                                <h2>
                                    Minimalist trending in modern architecture 2019
                                </h2>
                                <p>
                                    Building first evolved out dynamics between needs means available building materials attendant skills.
                                </p>
                                <a href="#blog"> read more </a>
                            </div>
                        </div>
                        <div className='Blog-item'>

                            <img
                                className="Img-Blog"
                                src={`${process.env.PUBLIC_URL}/Images/post-2.jpg`}
                                alt="Barbearia" />

                            <div className='Blog-text'>
                                <a href="#blog" className='Blog-text-indication'> ARCHITETURE </a>
                                <h2>
                                    Terrace in the town yamazaki kentaro design workshop.
                                </h2>
                                <p>
                                    Building first evolved out dynamics between needs means available building materials attendant skills.
                                </p>
                                <a href="#blog"> read more </a>
                            </div>
                        </div>
                        <div className='Blog-item'>

                            <img
                                className="Img-Blog"
                                src={`${process.env.PUBLIC_URL}/Images/post-3.jpg`}
                                alt="Barbearia" />

                            <div className='Blog-text'>
                                <a href="#blog" className='Blog-text-indication'> DESIGN </a>
                                <h2>
                                    W270 house são paulo arquitetos fabio jorge architeqture.
                                </h2>
                                <p>
                                    Building first evolved out dynamics between needs means available building materials attendant skills.
                                </p>
                                <a href="#blog"> read more </a>
                            </div>
                        </div>
                    </div>
				</div>
			</section>
			<section className='Scroll'>
				<div className='Scroll-container'>
					<div className='Scroll-item'> <img src={`${process.env.PUBLIC_URL}/Images/sponsor-1.png`} alt='imagem' /> </div>
					<div className='Scroll-item'> <img src={`${process.env.PUBLIC_URL}/Images/sponsor-2.png`} alt='imagem' /> </div>
					<div className='Scroll-item'> <img src={`${process.env.PUBLIC_URL}/Images/sponsor-3.png`} alt='imagem' /> </div>
					<div className='Scroll-item'> <img src={`${process.env.PUBLIC_URL}/Images/sponsor-4.png`} alt='imagem' /> </div>
					<div className='Scroll-item'> <img src={`${process.env.PUBLIC_URL}/Images/sponsor-5.png`} alt='imagem' /> </div>
					<div className='Scroll-item'> <img src={`${process.env.PUBLIC_URL}/Images/sponsor-1.png`} alt='imagem' /> </div>
					<div className='Scroll-item'> <img src={`${process.env.PUBLIC_URL}/Images/sponsor-2.png`} alt='imagem' /> </div>
					<div className='Scroll-item'> <img src={`${process.env.PUBLIC_URL}/Images/sponsor-3.png`} alt='imagem' /> </div>
					<div className='Scroll-item'> <img src={`${process.env.PUBLIC_URL}/Images/sponsor-4.png`} alt='imagem' /> </div>
					<div className='Scroll-item'> <img src={`${process.env.PUBLIC_URL}/Images/sponsor-5.png`} alt='imagem' /> </div>
				</div>
			</section>
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
         
			{/* Footer Section */}
			<footer>
				<p> &copy; 2026 Trendy Salon & Spa. All Rights Reserved.</p>
				<nav>
					<a href='#order'>ORDERS </a>
					<a href='#term' > TERMS </a>
					<a href='#support'> REPORT PROBLEM</a>
				</nav>
			</footer>



		</div >
	);
}

export default App;