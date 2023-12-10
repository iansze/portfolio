import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";

const Profile = () => {
  return (
    <section className="lg:mx-auto lg:grid lg:w-11/12 lg:grid-cols-2 lg:gap-8  2xl:w-9/12">
      <AboutMe />
      <Skills />
    </section>
  );
};

export default Profile;
