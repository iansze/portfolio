import React from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import engineerImg from "../assets/engineer.png";
import useMediaQuery from "../hooks/useMediaQuery";
import HoverButton from "../components/HoverButton";

type Props = {};

const Header = (props: Props) => {
  const mediaQuery = useMediaQuery();
  return (
    <header id="header">
      <Nav />
      <div className="flex flex-col gap-2  p-4">
        <p className="text-lg">Hello, I am</p>
        <h1 className="text-3xl font-semibold text-red-400">
          Wing Hon Winco Sze
        </h1>
        <p className="text-lg">
          A passionate software engineer with a strong foundation in computer
          science and hands-on experience in developing applications.
          <br />
        </p>
        <p className="text-lg">
          My expertise lies in building efficient, user-friendly solutions, and
          I'm continually exploring new technologies to enhance my skill set and
          contribute to innovative projects.
        </p>
        <HoverButton text="Contact Me" />
      </div>
      {mediaQuery > 768 ? (
        <div className="">
          <img src={engineerImg} alt="" className="bg-transparent" />
        </div>
      ) : null}
    </header>
  );
};

export default Header;
