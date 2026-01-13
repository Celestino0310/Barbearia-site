import styles from '../styles/service.module.css';

export function Service() {
    return (
			<section id="service" className="services_section">
				<div className="hero-content">
					<h3>Trendy Salon & Spa </h3>
					<h2> Our Barbers </h2>
					<div className="heading-line">
						<img src={`${process.env.PUBLIC_URL}/Images/heading-line.png`} alt="line" />
					</div>
				</div>

			</section>
    );
}   