
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Navbar.jsx";
import { Banner } from "./components/Banner.jsx";
import { Skills } from "./components/Skills.jsx";
import {About} from "./components/About.jsx";
import { Projects } from "./components/Projects.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <br/>
      <br/>
      <About/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;