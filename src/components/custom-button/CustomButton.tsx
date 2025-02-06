import React from "react";
import "./CustomButton.css";
import { CustomButtonType } from "../../types/types";

const CustomButton = ({ label, height = 46, handleClick }: CustomButtonType) => {
  return (
    <button
      className="custom_button_style"
      style={{ height: `${height}px` }}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default CustomButton;
