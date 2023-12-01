import React from "react";

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <section id="about" className="flex flex-col gap-2  p-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-center text-3xl">ABOUT ME</h2>
        <p className="">
          I'm Wing Hon Winco Sze, a Front-End Developer with aspirations to
          become a Full-Stack Developer.
        </p>
        <p className="">
          My expertise lies in React, Angular, HTML, CSS, and Tailwind,
          complemented by a growing proficiency in back-end development.
          Currently focusing on improving my Java skills.{" "}
        </p>
        <p className="">
          Passionate about crafting comprehensive web solutions, I am dedicated
          to provide seamless and efficient full-stack capabilities, aiming to
          create user-centered applications.
        </p>
      </div>
      {/* Skills */}
      <div className="mt-2 flex flex-col gap-2 ">
        <h2 className="text-center text-3xl">SKILLS SET</h2>
        <div className="vertical-line relative grid grid-cols-2 gap-4 border-t text-center leading-loose">
          <div>
            <h3 className="text-lg">
              Programming Languages<span>&#8595;</span>
            </h3>
            <p className="">Java, C#, JavaScript</p>
          </div>

          <div>
            <h3 className="text-lg">
              Database Management<span>&#8595;</span>
            </h3>
            <p> Oracle SQL, MongoDB</p>
          </div>
          <div className=" ">
            <h3 className="text-lg">
              Frameworks<span>&#8595;</span>
            </h3>
            <p>Angular, React</p>
          </div>
          <div className="">
            <h3 className="text-lg">
              Technologies<span>&#8595;</span>
            </h3>
            <p className="">
              Redux, HTML, CSS, Bootstrap, Tailwind, SASS, Typescript
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
