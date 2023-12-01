import { Link } from "react-router-dom";
import Anchor from "./Anchor";

const Nav = (props: Props) => {
  return (
    <div className="mx-auto flex w-11/12 justify-between">
      <img src="" alt="" className="" />
      <div className="flex gap-4 p-2">
        <Anchor page="About">About</Anchor>
        <Anchor page="Projects">Projects</Anchor>
        <Anchor page="Contact">Contact</Anchor>
      </div>
    </div>
  );
};

export default Nav;
