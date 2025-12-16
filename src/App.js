import './App.css';
/* inicio*/
function App() {
  return (
    <div className="App">
      <header className="main">
        <div className="center">

          
            <div className="logo">
              <img src="logo.png" className="App-logo" alt="logo" />
            </div>
            <nav className='navegation'>
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
      <section className='hero'>

        <div className="hero-content">
          <img className='img-hero' src='barbearia.jpg' alt="Imagem de uma barbearia" />
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

    </div>
  );
}

export default App;