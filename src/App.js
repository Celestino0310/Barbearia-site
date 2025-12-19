import './App.css';
import React from 'react';
import './index.js';
/* inicio*/

function slider() {

let imgSlider = document.querySelectorAll('.slider-container .slider-box');
let btnProx = document.querySelector('#proxima');
let btnAnter = document.querySelector('#anterior');
let btnNav = document.querySelectorAll('.btn-nav .btn-nav');

let contadorImg = imgSlider.length;
let imgAtiva = 0;

btnProx.addEventListener('click', () => {
  imgAtiva++;
});


}

/* aplicação Main */
function App() {
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
							<a href='#'>MAKE APPONTAMENT </a>

						</div>
					</nav>

				</div>
			</header>

			<section className='slider'>

				<div className='interface'>

					<div className="slider-container">

						<div className='slider-box '>
							<img src='barbearia.jpg' alt='Imagem de uma barbearia' />
							<div className='texto-slider'>
								<h2>Trendy Salon & Spa 1 </h2>
								<p>Your Style, Our Passion</p>
							</div>
						</div>

						<div className='slider-box ativo'>
							<img src='barbearia2.jpg' alt='Imagem de uma barbearia' />
							<div className='texto-slider'>
								<h2>Trendy Salon & Spa 2</h2>
								<p>Your Style, Our Passion</p>
							</div>
						</div>

						<div className='slider-box'>
							<img src='barbearia3.png' alt='Imagem de uma barbearia' />
							<div className='texto-slider'>
								<h2>Trendy Salon & Spa 4</h2>
								<p>Your Style, Our Passion</p>
							</div>
						</div>


					</div>

					{/* aprendeno a fazer setas  */}
					<div className='setas'>
						<button id='btn-voltar'><i class="bi bi-caret-left-fill"></i>  </button>
						<button id='btn-avancar'><i class="bi bi-caret-right-fill"></i></button>
					</div>

					<div className='btn-nav-box'>
						
				    </div>	
				</div>


			</section >



			<div className='overlay'></div>

			<section className='hero'>
				<div className="hero-content">
					<img className='img-hero' src='barbearia3.jpg' alt="Imagem de uma barbearia" />
				</div>
				<div className="hero-text">
					<h1>Welcome to Trendy Salon & Spa</h1>
					<p>Your Style, Our Passion</p>
					<a href="#service" className="header-btn">MAKE APPONTAMENT</a>
				</div>
			</section>
			<div className='center'>
				<a href='#service' className="header-btn">MAKE APPONTAMENT</a>
			</div>

			{/* seção de barbeiros  
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
              <img className='img-barber'src='2014-07-14-facebookperfil (1).png' alt="Team Member" />
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
*/}
		</div >
	);
}

export default App;