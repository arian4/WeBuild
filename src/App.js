
import About from './components/About';
import Blogs from './components/Blogs';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Projects from './components/Projects';
import Services from './components/Services';
function App() {
  return (
    <div className="App font-body">
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <Clients />
      <Pricing />
      <Contact />
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
