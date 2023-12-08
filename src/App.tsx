import Header from "./scenes/Header";
import AboutMe from "./scenes/AboutMe";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import Skills from "./scenes/Skills";

const App = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Header />
      <AboutMe />
      <Skills />

      <Projects />

      <Contact />
      <Footer />
    </div>
  );
};

export default App;
