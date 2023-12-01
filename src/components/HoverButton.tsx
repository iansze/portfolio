import React from "react";
import "./button.css";
import Anchor from "./Anchor";

type HoverButtonProps = {
  text: string;
};

const HoverButton = ({ text }: HoverButtonProps) => {
  return (
    <div className="svg-wrapper cursor-pointer">
      <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
        <rect id="shape" height="40" width="150" />
        <Anchor page={"Contact"}>
          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="svg-text"
          >
            {text}
          </text>
        </Anchor>
      </svg>
    </div>
  );
};

export default HoverButton;
