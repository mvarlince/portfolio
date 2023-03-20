import About from './components/About';
import Skills from './components/Skills';
import Home from './components/Home';
import NavBar from './components/NavBar'
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <>
    < NavBar />
    < Home />
    <SocialLinks />
    < About />
    <Projects />
    < Skills />
    <Contact />
    </>
  );
}

export default App;
