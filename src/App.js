import './App.css';
import React, { useRef, useState } from 'react';
import './index.js';

/* inicio*/

/* aplicação Main */
function App() {
	const [imgAtiva, setImgAtiva] = useState(1); // Começa com a imagem 2 ativa, pois no seu código a imagem 2 já está com a classe 'ativo'.

	const imagens = [
		{ src: 'about-1.jpg', alt: 'Our hair style enhances your smile' },
		{ src: 'barbearia2.jpg', alt: 'Lorem ipsum dolor sit amet ' },
		{ src: 'barbearia3.png', alt: 'lorem ipsum dolor sit amet sit alert' }
	];

	
	const avancar = () => {
		setImgAtiva((prev) => (prev + 1) % imagens.length);
	};

	const voltar = () => {
		setImgAtiva((prev) => (prev - 1 + imagens.length) % imagens.length);
	};
	//de


		return (


			<div className="App">
				<header className="main">
					<div className="center">


						<div className="logo">
							<img src="logo.png" className="App-logo" alt="logo" />
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
									<img src={img.src} alt={img.alt} />
									<div className='texto-slider'>
										<h2>{img.alt}</h2>
										<p>Your Style, Our Passion</p>
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
						<img className="about-logo" src='about-logo.png' alt="Logo da barbearia" />
						<p> Barber is a person whose occupation is mainly to cut dress groom style and shave men's and boys' hair. A barber's place of work is known as a "barbershop" or a "barber's". Barbershops are also places of social interaction and public discourse. In some instances, barbershops are also public forums. </p>
						<a href="#service" className='btn-a'> MORE ABOUT US </a>
					</div>

					<div className="banner-images">
						<img className="about01" src='about-1.jpg' alt="Imagem de uma barbearia" />
						<img className="about02" src='about-2.jpg' alt="Imagem de uma barbearia" />
						<img className="about03" src='about-3.jpg' alt="Imagem de uma barbearia" />
					</div>
				</section>

				<section className='hero'>
					<div className="hero-content">
						<h3>Trendy Salon & Spa </h3>
						<h2> Our Services </h2>
						<div class="heading-line">
							<img src='heading-line.png'></img>
						</div>
					</div>
					<div className="hero-text">
						<div className='hero-box'>

							<img src="razor-1.png" class="bi-scissors" ></img>
							<h2> Haircut Styles</h2>
							<p> Barber is a person whose occupation is mainly to cut dress style. </p>
						</div>
						<div className='hero-box'>
							<img src="razor-2.png" class="bi-scissors" ></img>
							<h2> Beard Triming</h2>
							<p> Barber is a person whose occupation is mainly to cut dress style. </p>
						</div>
						<div className='hero-box'>
							<img src="razor-3.png" class="bi-scissors" ></img>
							<h2> Smooth Shave</h2>
							<p>Barber is a person whose occupation is mainly to cut dress style. </p>
						</div>
						<div className='hero-box'>
							<img src="razor-4.png" class="bi-scissors" ></img>
							<h2> Face Masking </h2>
							<p> Barber is a person whose occupation is mainly to cut dress style. </p>
						</div>

					</div>
				</section>
				<section id="Appontament"className='Appontament'>
					<div>
						<div>
							<img src='barbearia3.png'></img>
						</div>
						<div className='Formulario'>
							
							<h2> Make an Apointment</h2>
							<form> 
							  <label>nome</label>
							  <input></input>

							  <label>nome</label>
							  <input></input>	

							  <label>nome</label>
							  <input></input>	

							  <label>nome</label>
							  <input></input>	

							  <label>nome</label>
							  <input></input>	

							  <label>nome</label>
							  <input></input>	

							  <label>nome</label>
							  <input></input>		

							</form>	
						</div>

					</div>
				</section>				

				<section id="service" className="services_section">
					<div className="section_heading text-center mb-40 wow fadeInUp" data-wow-delay="300ms" style={{ visibility: 'visible', animationDelay: '300ms', animationName: 'fadeInUp' }}>
						<h3>Trendy Salon & Spa</h3>
						<h2>Our Services</h2>
						<div className="heading-line"></div>
					</div>
					<div className="container">

						<div className="container-items">sa</div>
						<div className="container-items"> </div>
						<div className="container-items"> </div>
						<div className="container-items"> </div>
					</div>
				</section>



				<section id="team" className="team_section bd-bottom padding">
					<div className="container">
						<div
							className="section_heading text-center mb-40 wow fadeInUp"
							data-wow-delay="300ms"
							style={{
								visibility: "visible",
								animationDelay: "300ms",
								animationName: "fadeInUp"
							}}
						>
							<h3>Trendy Salon & Spa</h3>
							<h2>Our Barbers</h2>
							<div className="heading-line"></div>
						</div>

						<ul className="team_members row">
							<li className="col-lg-3 col-md-6 sm-padding wow fadeInUp" data-wow-delay="200ms">
								<div className="team_member">
									<img className='img-barber' src='2014-07-14-facebookperfil (1).png' alt="Team Member" />
									<div className="overlay">
										<h3>Kyle Frederick</h3>
										<p>WEB DESIGNER</p>
									</div>
								</div>
							</li>

							<li className="col-lg-3 col-md-6 sm-padding wow fadeInUp" data-wow-delay="300ms">
								<div className="team_member">
									<img className='img-barber' src='2014-07-14-facebookperfil (1).png' alt="Team Member" />
									<div className="overlay">
										<h3>José Carpio</h3>
										<p>WORDPRESS DEVELOPER</p>
									</div>
								</div>
							</li>

							<li className="col-lg-3 col-md-6 sm-padding wow fadeInUp" data-wow-delay="400ms">
								<div className="team_member">
									<img className='img-barber' src='2014-07-14-facebookperfil (1).png' alt="Team Member" />
									<div className="overlay">
										<h3>Michel Ibáñez</h3>
										<p>ONLINE MARKETER</p>
									</div>
								</div>
							</li>

							<li className="col-lg-3 col-md-6 sm-padding wow fadeInUp" data-wow-delay="500ms">
								<div className="team_member">
									<img className='img-barber' src='2014-07-14-facebookperfil (1).png' alt="Team Member" />
									<div className="overlay">
										<h3>Adam Castellon</h3>
										<p>JAVA SPECIALIST</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</section>



				{/* Footer Section */}
				<footer>
					<p> &copy; 2026 Trendy Salon & Spa. All Rights Reserved.</p>
				</footer>



			</div >
		);
	}

	export default App;