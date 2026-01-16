import { useEffect, useRef } from "react";
import styles from "../styles/HorizonScroll.module.css";

export function HorizonScroll() {
  const slider = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const el = slider.current;
    el.scrollLeft = el.scrollWidth / 3;
  }, []);

  const onMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX;
    scrollLeft.current = slider.current.scrollLeft;
  };

  const onMouseUp = () => (isDown.current = false);
  const onMouseLeave = () => (isDown.current = false);

  const onMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const walk = (e.pageX - startX.current) * 1.5;
    slider.current.scrollLeft = scrollLeft.current - walk;
    handleInfiniteScroll();
  };

  const handleInfiniteScroll = () => {
    const el = slider.current;
    const maxScroll = el.scrollWidth / 1.5;

    if (el.scrollLeft <= 0) {
      el.scrollLeft = maxScroll;
    } else if (el.scrollLeft >= maxScroll * 2) {
      el.scrollLeft = maxScroll;
    }
  };

  return (
    <section
      className={styles.secImg}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/Images/barbearia3.png)`
      }}
    >
      <div
        ref={slider}
        className={styles.slider}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
      >
        {[1, 2, 3, 1, 2, 3].map((item, i) => (
          <div key={i} className={styles.slide}>
            <p>
              “There are design companies, and then there are user experience
              design interface professionals.”
            </p>
            <span>Anita Tran, IT Solutions</span>
          </div>
        ))}
      </div>
    </section>
  );
}
