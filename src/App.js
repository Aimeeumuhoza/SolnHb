import Navbar from '../src/components/Navbar/Navbar';
import Content from './components/Header/content';
import Services from './components/Services/Services';
import About from "./components/About/About";
import Qualities from './components/Qualities/Qualities';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonies from './components/Testimonies/Testimonies'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div>
      <Navbar/>
      <Content/>
      <Services/>
      <About/>
      <Qualities/>
      <Portfolio/>
      <Testimonies/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
