import movieImg from "../assets/movie.jpg";
import Project from "../components/Project";
import estateImg from "../assets/estate.png";

const ProjectsList = [
  {
    title: "TMDB Movie App",
    description:
      "The TMDB project is a web-based platform designed for movie enthusiasts. It offers a comprehensive and engaging experience for users looking to explore, discover, and learn more about various movies. The application combines a visually appealing interface with user-friendly functionalities to create a seamless movie browsing and discovery experience.",
    technology: [
      "React",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Stripe",
      "Axios",
      "TMDB API",
    ],
    image: movieImg,
    backgroundColor: "bg-red-500",
    websiteURL: "https://moiv-4c40c.web.app/",
    githubURL: "https://github.com/iansze/TMDB",
  },
  {
    title: "Estate Market Place",
    description:
      "The EstateMarketPlace project is a web-based application designed to facilitate the buying, selling, and renting of real estate properties. Aimed at providing a user-friendly platform, it connects property owners with potential buyers or renters, streamlining the process of real estate transactions",
    technology: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Redux",
      "Tailwind CSS",
    ],
    image: estateImg,
    backgroundColor: "bg-green-500",
    websiteURL: "https://estate-website.onrender.com/",
    githubURL: "https://github.com/iansze/EstateMarketPlace",
  },
  {
    title: "Blog with Redux Toolkit",
    description:
      "BlogRTK is a modern web-based blogging platform that allows users to create, share, and engage with blog posts. It's built to provide an easy-to-use, interactive, and community-driven blogging experience.",
    technology: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Redux",
      "Redux Toolkit",
      "SASS",
    ],
    image: estateImg,
    backgroundColor: "bg-blue-800",
    websiteURL: "https://estate-website.onrender.com/",
    githubURL: "https://github.com/iansze/BlogRTK",
  },
];

const Projects = () => {
  return (
    <>
      {ProjectsList.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          technology={project.technology}
          image={project.image}
          backgroundColor={project.backgroundColor}
          websiteURL={project.websiteURL}
          githubURL={project.githubURL}
        />
      ))}
    </>
  );
};

export default Projects;
