import styles from '../styles/price.module.css';

export function Price() {
    return (

        <section className={styles['price']}>
            <div className={styles['hero-content']}>
                <h3>Save 20% On Beauty Spa</h3>
                <h2> Our Barber Pricing </h2>
                <div className={styles['heading-line']}>
                    <img src={`${process.env.PUBLIC_URL}/Images/heading-line.png`} alt="line" />
                </div>
            </div>

            <div className={styles['price-content']+' animate-on-scroll fade-in'}>

                <div className={styles['price-text']}>

                    <h3> Hair Styling </h3>
                    <ul>

                        <li className={styles['price-item']}>
                            <div className={styles['price-line']}>
                                <h4>Hair Cut</h4>

                                <span className={styles['line']}></span>

                                <span className={styles['price']}   >$8</span>
                            </div>

                            <p>
                                Barber is a person whose occupation is mainly to cut dress groom style and shave men.
                            </p>
                        </li>
                        <li className={styles['price-item']}>
                            <div className={styles['price-line']}>
                                <h4>Hair Styling</h4>

                                <span className={styles['line']}></span>

                                <span className={styles['price']}   >$9</span>
                            </div>

                            <p>
                                Barber is a person whose occupation is mainly to cut dress groom style and shave men.
                            </p>
                        </li>
                        <li className={styles['price-item']}>
                            <div className={styles['price-line']}>
                                <h4>Hair Triming</h4>

                                <span className={styles['line']}></span>

                                <span className={styles['price']}   >$10</span>
                            </div>

                            <p>
                                Barber is a person whose occupation is mainly to cut dress groom style and shave men.
                            </p>
                        </li>

                    </ul>
                </div>
                <div className={styles['price-text']}>

                    <h3> Shaving </h3>
                    <ul>

                        <li className={styles['price-item']}>
                            <div className={styles['price-line']}>
                                <h4>Clean Shaving</h4>

                                <span className={styles['line']}></span>

                                <span className={styles['price']}   >$8</span>
                            </div>

                            <p>
                                Barber is a person whose occupation is mainly to cut dress groom style and shave men.
                            </p>
                        </li>
                        <li className={styles['price-item']}>
                            <div className={styles['price-line']}>
                                <h4>Beard Triming</h4>

                                <span className={styles['line']}></span>

                                <span className={styles['price']}   >$9</span>
                            </div>

                            <p>
                                Barber is a person whose occupation is mainly to cut dress groom style and shave men.
                            </p>
                        </li>
                        <li className={styles['price-item']}>
                            <div className={styles['price-line']}>
                                <h4>Smooth Shave</h4>

                                <span className={styles['line']}></span>

                                <span className={styles['price']}   >$10</span>
                            </div>

                            <p>
                                Barber is a person whose occupation is mainly to cut dress groom style and shave men.
                            </p>
                        </li>

                    </ul>
                </div>
                <div className={styles['price-text']}>

                    <h3>Face Masking</h3>
                    <ul>

                        <li className={styles['price-item']}>
                            <div className={styles['price-line']}>
                                <h4>White Facial</h4>

                                <span className={styles['line']}></span>

                                <span className={styles['price']}   >$8</span>
                            </div>

                            <p>
                                Barber is a person whose occupation is mainly to cut dress groom style and shave men.
                            </p>
                        </li>
                        <li className={styles['price-item']}>
                            <div className={styles['price-line']}>
                                <h4>Face Cleaning</h4>

                                <span className={styles['line']}></span>

                                <span className={styles['price']}   >$10</span>
                            </div>

                            <p>
                                Barber is a person whose occupation is mainly to cut dress groom style and shave men.
                            </p>
                        </li>
                        <li className={styles['price-item']}>
                            <div className={styles['price-line']}>
                                <h4>Bright Tuning</h4>

                                <span className={styles['line']}></span>

                                <span className={styles['price']}   >$12</span>
                            </div>

                            <p>
                                Barber is a person whose occupation is mainly to cut dress groom style and shave men.
                            </p>
                        </li>

                    </ul>
                </div>



            </div>

        </section>
    );
}