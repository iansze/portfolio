import Header from "./scenes/Header";

import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";

import Profile from "./scenes/Profile";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="bg-background text-navy relative ">
      <Nav />
      <Header />
      <Profile />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
