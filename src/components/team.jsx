import styles from '../styles/team.module.css';
import { useEffect } from 'react';

export function Team() {
      useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="team" className={styles['service-Section']}>
            <div className={styles['container']}>
                <ul className={styles['team-members']}>
                    {/* Card 1 - sem delay */}
                    <li className="animate-on-scroll fade-in delay-1">
                        <div className={styles['team-member']}>
                            <img 
                                className={styles['img-barber']} 
                                src={`${process.env.PUBLIC_URL}/Images/team-3.jpg`} 
                                alt="Team Member" 
                            />
                            <div className={styles["overlay"]}>
                                <h3>Kyle Frederick</h3>
                                <p>WEB DESIGNER</p>
                            </div>
                        </div>
                    </li>

                    {/* Card 2 - delay 0.3s */}
                    <li className="animate-on-scroll fade-in delay-2">
                        <div className={styles['team-member']}>
                            <img 
                                className={styles['img-barber']} 
                                src={`${process.env.PUBLIC_URL}/Images/team-1.jpg`} 
                                alt="Team Member" 
                            />
                            <div className={styles["overlay"]}>
                                <h3>José Carpio</h3>
                                <p>WORDPRESS DEVELOPER</p>
                            </div>
                        </div>
                    </li>

                    {/* Card 3 - delay 0.5s */}
                    <li className="animate-on-scroll fade-in delay-3">
                        <div className={styles['team-member']}>
                            <img 
                                className={styles['img-barber']} 
                                src={`${process.env.PUBLIC_URL}/Images/team-2.jpg`} 
                                alt="Team Member" 
                            />
                            <div className={styles["overlay"]}>
                                <h3>Michel Ibáñez</h3>
                                <p>ONLINE MARKETER</p>
                            </div>
                        </div>
                    </li>

                    {/* Card 4 - delay 0.7s */}
                    <li className="animate-on-scroll fade-in delay-4">
                        <div className={styles['team-member']}>
                            <img 
                                className={styles['img-barber']} 
                                src={`${process.env.PUBLIC_URL}/Images/team-4.jpg`} 
                                alt="Team Member" 
                            />
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