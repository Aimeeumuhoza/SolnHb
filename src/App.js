import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import Content from './components/Header/content';
import Services from './components/Services/Services';
import About from "./components/About/About";
import Qualities from './components/Qualities/Qualities';
function App() {
  return (
    <div>
      <Navbar/>
      <Content/>
      <Services/>
      <About/>
      <Qualities/>
    </div>
  );
}

export default App;
