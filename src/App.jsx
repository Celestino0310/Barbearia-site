import './App.css';

// Componentes
import { Header } from './components/header.jsx';
import { Slider } from './components/slider.jsx';
import { Banner } from './components/banner.jsx';
import { Hero } from './components/hero.jsx';
import { Service } from './components/service.jsx';
import { Appontament } from './components/appontament.jsx';
import { Team } from './components/team.jsx';
import { Price } from './components/price.jsx';
import { BackgroudImg1 } from './components/backgroundImg-1.jsx';
import { Blog } from './components/blog.jsx';
import { Scroll } from './components/scroll.jsx';
import { Widget } from './components/widget.jsx';
import { Footer } from './components/footer.jsx';

function App() {
  return (
    <div>
      <Header />
      <Slider />
	  <Banner />
      <Hero />
      <Service />
      <Appontament />
	  <BackgroudImg1 />
      <Team />
      <Price />
      <BackgroudImg1 />
      <Blog />
      <Scroll />
      <Widget />
      <Footer />
    </div>
  );
}

export default App;