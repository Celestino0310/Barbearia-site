import styles from '../styles/blog.module.css';

export function Blog() {
    return (
        <section id="blog" className={styles['Blog-section'] + ' animate-on-scroll fade-in'}>
            <div className={styles['Blog']}>
                <div className={styles['Blog-title']}>
                    <h3> From Blog</h3>
                    <h2>A Good Newspaper Is A<br></br>
                        Nation Talking To Itself </h2>
                </div>
                <div className={styles['Blog-container']}>
                    <li className="animate-on-scroll fade-in delay-1">
                        <div className={styles['Blog-item']}>

                            <img
                                className={styles['ImgBlog']}
                                src={`${process.env.PUBLIC_URL}/Images/post-1.jpg`}
                                alt="Barbearia" />

                            <div className={styles['Blog-text']}>
                                <a href="#blog" className={styles['Blog-text-indication']}> INTERIOR </a>
                                <h2>
                                    Minimalist trending in modern architecture 2019
                                </h2>
                                <p>
                                    Building first evolved out dynamics between needs means available building materials attendant skills.
                                </p>
                                <a className={styles.specialLink} href="#blog"> read more </a>
                            </div>
                        </div>
                    </li>

                    <li className="animate-on-scroll fade-in delay-2">
                        <div className={styles['Blog-item']}>

                            <img
                                className={styles['ImgBlog']}
                                src={`${process.env.PUBLIC_URL}/Images/post-2.jpg`}
                                alt="Barbearia" />

                            <div className={styles['Blog-text']}>
                                <a href="#blog" className={styles['Blog-text-indication']}> ARCHITETURE </a>
                                <h2>
                                    Terrace in the town yamazaki kentaro design workshop.
                                </h2>
                                <p>
                                    Building first evolved out dynamics between needs means available building materials attendant skills.
                                </p>
                                <a className={styles.specialLink} href="#blog"> read more </a>
                            </div>
                        </div>
                    </li>
                    <li className="animate-on-scroll fade-in delay-3">
                        <div className={styles['Blog-item']}>

                            <img
                                className={styles['ImgBlog']}
                                src={`${process.env.PUBLIC_URL}/Images/post-3.jpg`}
                                alt="Barbearia" />

                            <div className={styles['Blog-text']}>
                                <a href="#blog" className={styles['Blog-text-indication']}> DESIGN </a>
                                <h2>
                                    W270 house são paulo arquitetos fabio jorge architeqture.
                                </h2>
                                <p>
                                    Building first evolved out dynamics between needs means available building materials attendant skills.
                                </p>
                                <a className={styles.specialLink} href="#blog"> read more </a>
                            </div>
                        </div>
                    </li>
                </div>
            </div>
        </section>
    );
}