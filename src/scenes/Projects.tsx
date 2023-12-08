import data from "../data/ProjectsData.json";
import { ProjectData } from "../types/types";
import Project from "../components/Project";

import { motion } from "framer-motion";

const Projects = () => {
  const projectsData: ProjectData[] = data as ProjectData[];

  return (
    <motion.div className=" flex flex-col px-2 py-4">
      {projectsData.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          summary={project.summary}
          description={project.description}
          technology={project.technology}
          images={project.images}
          backgroundColor={project.backgroundColor}
          websiteURL={project.websiteURL}
          githubURL={project.githubURL}
        />
      ))}
    </motion.div>
  );
};

export default Projects;
