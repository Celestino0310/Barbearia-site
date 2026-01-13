import styles from '../styles/header.module.css';

export function Header() {
  return (
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

  );
}