import Header from "./scenes/Header";

import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";

import Profile from "./scenes/Profile";

const App = () => {
  return (
    <div className="bg-background text-navy relative min-h-screen">
      <Header />
      <Profile />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
