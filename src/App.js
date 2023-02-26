import About from './components/About';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';

function App() {
  return (
    <>
    < NavBar />
    < Home />
    <SocialLinks />
    < About />
    <Portfolio />
    < Experience />
    <Contact />
    </>
  );
}

export default App;
