//import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonal from './components/testimonals/Testimonal';
import Contact from './components/contact/Contact';
import ScrollUp from './components/scrollup/ScrollUp';
import Work from './components/work/Work';
import Footer from './components/footer/Footer';
function App() {
  return (
    < >
      <Header/>
      <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Work/>
      <Testimonal/>
      <Contact/>
      
      </main>

      <Footer/>
      <ScrollUp/>
    </>
  );
}

export default App;
