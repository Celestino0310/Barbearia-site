import styles from '../styles/team.module.css';

export function Team() {
	return (


		<section id="team" className={styles['service-Section']}>
			<div className={styles['container']}>
				
					<ul className={styles['team-members']}>
						<li className="col-lg-3 col-md-6 sm-padding wow fadeInUp" data-wow-delay="200ms">
							<div className={styles['team-member']}>
								<img className={styles['img-barber']} src={`${process.env.PUBLIC_URL}/Images/team-3.jpg`} alt="Team Member" />
								<div className={styles["overlay"]}>
									<h3>Kyle Frederick</h3>
									<p>WEB DESIGNER</p>
								</div>
							</div>
						</li>

						<li className="col-lg-3 col-md-6 sm-padding wow fadeInUp" data-wow-delay="300ms">
							<div className={styles['team-member']}>
								<img className={styles['img-barber']} src={`${process.env.PUBLIC_URL}/Images/team-1.jpg`} alt="Team Member" />
								<div className={styles["overlay"]}>
									<h3>José Carpio</h3>
									<p>WORDPRESS DEVELOPER</p>
								</div>
							</div>
						</li>

						<li className="col-lg-3 col-md-6 sm-padding wow fadeInUp" data-wow-delay="400ms">
							<div className={styles['team-member']}>
								<img className={styles['img-barber']} src={`${process.env.PUBLIC_URL}/Images/team-2.jpg`} alt="Team Member" />
								<div className={styles["overlay"]}>
									<h3>Michel Ibáñez</h3>
									<p>ONLINE MARKETER</p>
								</div>
							</div>
						</li>

						<li className="col-lg-3 col-md-6 sm-padding wow fadeInUp" data-wow-delay="500ms">
							<div className={styles['team-member']}>
								<img className={styles['img-barber']} src={`${process.env.PUBLIC_URL}/Images/team-4.jpg`} alt="Team Member" />
								<div className={styles['overlay']}>
									<h3>Adam Castellon</h3>
									<p>JAVA SPECIALIST</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
		
		</section>
	);
}  