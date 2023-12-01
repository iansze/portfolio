import Header from "./scenes/Header";
import AboutMe from "./scenes/AboutMe";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";

const App = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
