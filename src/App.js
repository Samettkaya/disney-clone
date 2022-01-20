
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Header from './components/Header';
import Movies from './components/Movies';
import Section from './components/Section';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <Header></Header>
      <Carousel></Carousel>
      <Section></Section>
      <Movies></Movies>
      <Footer></Footer>
    </div>

  );
}

export default App;
