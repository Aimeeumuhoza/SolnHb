import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import Content from './components/Header/content';
import Services from './components/Services/Services';
import About from "./components/About/About";
import Qualities from './components/Qualities/Qualities';
import Portfolio from './components/Portfolio/Portfolio'
function App() {
  return (
    <div>
      <Navbar/>
      <Content/>
      <Services/>
      <About/>
      <Qualities/>
      <Portfolio/>
    </div>
  );
}

export default App;
