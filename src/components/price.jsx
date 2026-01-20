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

            <div className={styles['price-content'] + ' animate-on-scroll fade-in'}>

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
                                Professional haircut that enhances your personal style with modern techniques and impeccable finishing to leave you feeling renewed.
                            </p>
                        </li>
                        <li className={styles['price-item']}>
                            <div className={styles['price-line']}>
                                <h4>Hair Styling</h4>

                                <span className={styles['line']}></span>

                                <span className={styles['price']}   >$9</span>
                            </div>

                            <p>
                                Hair modeling and finishing with quality products, creating the perfect look for any special occasion or everyday style.
                            </p>
                        </li>
                        <li className={styles['price-item']}>
                            <div className={styles['price-line']}>
                                <h4>Hair Triming</h4>

                                <span className={styles['line']}></span>

                                <span className={styles['price']}   >$10</span>
                            </div>

                            <p>
                                Trim and adjust hair length while maintaining your current cut, ideal for keeping your look always sharp and well-groomed.
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
                                Complete traditional shave that removes all facial hair, leaving skin smooth, soft and with a prolonged feeling of freshness.
                            </p>
                        </li>
                        <li className={styles['price-item']}>
                            <div className={styles['price-line']}>
                                <h4>Beard Triming</h4>

                                <span className={styles['line']}></span>

                                <span className={styles['price']}   >$9</span>
                            </div>

                            <p>
                                Precise beard trimming and shaping, defining contours and maintaining the ideal length for a masculine and elegant look.
                            </p>
                        </li>
                        <li className={styles['price-item']}>
                            <div className={styles['price-line']}>
                                <h4>Smooth Shave</h4>

                                <span className={styles['line']}></span>

                                <span className={styles['price']}   >$10</span>
                            </div>

                            <p>
                                Smooth and refined shave with hot towels and premium products, providing maximum comfort and impeccable finish on the skin.
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
                                Brightening facial treatment that revitalizes the skin, reduces dark spots and promotes a more luminous and even appearance.
                            </p>
                        </li>
                        <li className={styles['price-item']}>
                            <div className={styles['price-line']}>
                                <h4>Face Cleaning</h4>

                                <span className={styles['line']}></span>

                                <span className={styles['price']}   >$10</span>
                            </div>

                            <p>
                                Deep skin cleansing that removes impurities, oil and dead cells, leaving your face fresh and revitalized.
                            </p>
                        </li>
                        <li className={styles['price-item']}>
                            <div className={styles['price-line']}>
                                <h4>Bright Tuning</h4>

                                <span className={styles['line']}></span>

                                <span className={styles['price']}   >$12</span>
                            </div>

                            <p>
                                Intensive treatment that brightens and tones facial skin, restoring natural glow and improving skin texture.
                            </p>
                        </li>

                    </ul>
                </div>



            </div>

        </section>


    );
}