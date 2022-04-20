import React from "react";
import './Button.css'

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <h1 className="text-3xl font-bold underline text-green-600">
      Hello world!
    </h1>
  );
};

export default Button;