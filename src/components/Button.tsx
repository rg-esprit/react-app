import React from "react";

interface Props {
  children: string;
  onButtonClicked: (command: string) => void;
}

const Button = (prop: Props) => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => prop.onButtonClicked("open")}
    >
      {prop.children}
    </button>
  );
};

export default Button;
