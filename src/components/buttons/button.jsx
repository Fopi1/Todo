import React from "react";
import "./button.css";

const Button = ({ children, onClick, styleButton, styleComponents }) => {
  return (
    <button onClick={onClick} style={styleButton} className="button">
      <div style={styleComponents}>{children}</div>
    </button>
  );
};

export default Button;
