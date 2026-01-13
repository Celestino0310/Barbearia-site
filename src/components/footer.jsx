import styles from '../styles/footer.module.css';   

export function Footer() {
    return (

        < footer className={styles.footer}>
				<p> &copy; 2026 Trendy Salon & Spa. All Rights Reserved.</p>
				<nav>
					<a href='#order'>ORDERS </a>
					<a href='#term' > TERMS </a>
					<a href='#support'> REPORT PROBLEM</a>
				</nav>
		</footer >

       
    );
}