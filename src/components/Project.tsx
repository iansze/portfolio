import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCode, faLink } from "@fortawesome/free-solid-svg-icons";

type ProjectProps = {
  title: string;
  description: string;
  technology: string[];
  image: string;
  backgroundColor: string;
  websiteURL: string;
  githubURL: string;
};

const Project = ({
  title,
  description,
  technology,
  image,
  backgroundColor,
  websiteURL,
  githubURL,
}: ProjectProps) => {
  return (
    <section
      id="projects"
      className={`${backgroundColor} flex flex-col px-2 py-4`}
    >
      <div className="">
        <img src={image} alt="Movie Image" className="" />
      </div>
      <div className="mt-2 flex flex-col gap-4 px-1">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <a href={websiteURL} target="_blank">
            <FontAwesomeIcon
              icon={faCode as IconProp}
              className="hover:animate-tada cursor-pointer "
            />
          </a>
          <a href={githubURL} target="_blank">
            <FontAwesomeIcon
              icon={faLink as IconProp}
              className="hover:animate-tada cursor-pointer "
            />
          </a>
        </div>
        <p className="">{description}</p>
        <div className="flex flex-wrap justify-around gap-2">
          {technology.map((tech, index) => (
            <p
              key={index}
              className="border bg-slate-400 px-1 py-0.5 text-slate-700"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
