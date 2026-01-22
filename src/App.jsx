import './App.css';
import { useEffect,useState } from 'react';

// Componentes
import { Header } from './components/header.jsx';
import { Slider } from './components/slider.jsx';
import { Banner } from './components/banner.jsx';
import { Hero } from './components/hero.jsx';
import { Service } from './components/service.jsx';
import { HorizonScroll } from './components/horizonScroll.jsx'; 
import { Appontament } from './components/appontament.jsx';
import { Team } from './components/team.jsx';
import { Price } from './components/price.jsx';
import { BackgroudImg1 } from './components/backgroundImg-1.jsx';
import { Blog } from './components/blog.jsx';
import { Scroll } from './components/scroll.jsx';
import { Widget } from './components/widget.jsx';
import { Footer } from './components/footer.jsx';
import { Botão } from './components/botão.jsx';
import { Loading } from './components/loading.jsx';
import styles from './styles/loading.module.css';

function App() {
   // loading
   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 segundos de delay

    return () => clearTimeout(timer);
  }, []);




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
      
    <div className={styles.App}>
       {isLoading ? <Loading /> : (
        <>
        
      <Header />
     
       <Slider />
       <Botão  />
	    <Banner />
        <Hero />
        <Appontament />
        <Service />
        <Team />
        <HorizonScroll />
        <Price />
        <BackgroudImg1 />
        <Blog />
        <Scroll />
        <Widget />
        <Footer />
       </>
      )}
    </div>
  );
}

export default App;