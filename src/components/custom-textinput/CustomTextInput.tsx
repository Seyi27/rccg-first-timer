import React from "react";
import "./CustomTextInput.css";
import { CustomTextInputType } from "../../types/types";

const CustomTextInput = ({
  name,
  value,
  label,
  errorMessage,
  handleTextInput,
}: CustomTextInputType) => {
  return (
    <div className="custom_textinput_style">
      <input
        type="text"
        value={value}
        onChange={(e) => handleTextInput(name, e.target.value)}
        className={`normal_textinput ${errorMessage && "error_textInput"}`}
        maxLength={name == 'phone' ? 10 : undefined}
      /><br></br>
      <label>{label}</label>
      {errorMessage && <span className="error_message">{errorMessage}</span>}
    </div>
  );
};

export default CustomTextInput;
