import styles from '../styles/blog.module.css';

export function Blog () {
    return ( 
			<section className={styles['Blog-section']}>
				<div className={styles['Blog']}>
					<div className={styles['Blog-title']}>
						<h3> From Blog</h3>
						<h2>A Good Newspaper Is A<br></br>
							Nation Talking To Itself </h2>
					</div>
					<div className={styles['Blog-container']}>

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
                                <a href="#blog"> read more </a>
                            </div>
                        </div>
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
                                <a href="#blog"> read more </a>
                            </div>
                        </div>
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
                                <a href="#blog"> read more </a>
                            </div>
                        </div>
                    </div>
				</div>
			</section>
    );
}