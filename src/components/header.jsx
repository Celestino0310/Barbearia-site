import styles from '../styles/header.module.css';

export function Header() {
	const handleMobileMenu = () => {
		const navList = document.querySelector(`.${styles.options}`);
		const mobileMenu = document.querySelector(`.${styles["mobile-menu"]}`);
		
		navList.classList.toggle(styles.active);
		mobileMenu.classList.toggle(styles.active);
		
		// Anima os links
		const navLinks = document.querySelectorAll(`.${styles.options} li`);
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
			}
		});
	};

	return (
		<header className={styles.main}>
			<div className={styles.center}>
				<div className={styles.logo}>
					<img src={`${process.env.PUBLIC_URL}/Images/logo.png`} className={styles["App-logo"]} alt="logo" />
				</div>
				<nav className={styles.navegation}>
					<div className={styles["mobile-menu"]} id="mobile-menu" onClick={handleMobileMenu}>
						<div className={styles["line1"]}></div>
						<div className={styles["line2"]}></div>
						<div className={styles["line3"]}></div>
					</div>
					<ul className={styles.options}>
						<li><a href="#home">HOME</a></li>
						<li><a href="#service">ABOUT</a></li>
						<li><a href="#home">SERVICES</a></li>
						<li><a href="#service">PAGES</a></li>
						<li><a href="#service">BLOG</a></li>
						<li><a href="#home">CONTACT</a></li>
					</ul>
					<div className={styles['header-btn']}>
						<a href='#Appontament'>MAKE APPOINTMENT</a>
					</div>
				</nav>
			</div>
		</header>
	);
}