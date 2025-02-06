import React, { useState } from "react";
import "./FirstTimerPage.css";
import RccgLogo from "../../assets/rccg_logo.png";
import RccgLogo_svg from "../../assets/rccg_logo.svg";
import EternalLogo from "../../assets/eternal_logo.png";
import CustomButton from "../../components/custom-button/CustomButton";
import CustomTextInput from "../../components/custom-textinput/CustomTextInput";

const FirstTimerPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [sex, setSex] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [contactAddress, setContactAddress] = useState("");

  const [errorFullName, setErrorFullName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorSex, setErrorSex] = useState("");
  const [errorPhoneNo, setErrorPhoneNo] = useState("");
  const [errorContactAddress, setErrorContactAddress] = useState("");

  const handleTextInput = (key: string, e: string) => {
    switch (key) {
      case "fullName":
        if (!e.trim()) {
          setFullName("");
          setErrorFullName("Full Name cannot be empty");
        } else if (/^[A-Za-z]+$/.test(e.trim())) {
          setFullName(e.trim());
          setErrorFullName("");
        } else {
          setErrorFullName("invalid");
        }
        break;
      case "email":
        setEmail(e.trim());
        if (!e.trim()) {
          setErrorEmail("Email cannot be empty");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())) {
          // if email is not valid
          setErrorEmail("Email is not valid");
        } else {
          setErrorEmail("");
        }
        break;
      case "phone":
        if (!e.trim()) {
          setPhoneNo("");
          setErrorPhoneNo("Phone Number cannot be empty");
        } else if (/^\d+$/.test(e.trim())) {
          // takes only numbers
          setPhoneNo(e.trim());
          setErrorPhoneNo("");
        } else {
          setErrorPhoneNo("");
        }
        break;
      case "sex":
        if (!e.trim()) {
          setSex("");
          setErrorSex("Sex cannot be empty");
        } else if (/^[A-Za-z]+$/.test(e.trim())) {
          setSex(e.trim());
          setErrorSex("");
        } else {
          setErrorSex("");
        }
        break;
      case "contactAddress":
        setContactAddress(e.trim());
        if (!e.trim()) {
          setContactAddress("");
          setErrorContactAddress("Contact Address cannot be empty");
        } else {
          setErrorContactAddress("");
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="main_container first_timer_main_container">
      <div className="form_outer_container">
        <div className="logo_container">
          <img src={RccgLogo_svg} />
          <img src={EternalLogo} className="eternal_logo_image" />
        </div>

        <div style={{ padding: "6px" }} />

        <div className="form_white_container">
          <p>First Timer Form</p>

          <div style={{ padding: "6px" }} />

          <div>
            {/* main form container */}
            <div className="main_form_container">
              {/* left container */}
              <div>
                <CustomTextInput
                  name={"fullName"}
                  value={fullName}
                  label={"Full Name"}
                  errorMessage={errorFullName}
                  handleTextInput={handleTextInput}
                />

                <div style={{ padding: "20px" }} />

                <CustomTextInput
                  name={"email"}
                  value={email}
                  label={"Email"}
                  errorMessage={errorEmail}
                  handleTextInput={handleTextInput}
                />

                <div style={{ padding: "20px" }} />

                <CustomTextInput
                  name={"sex"}
                  value={sex}
                  label={"Sex"}
                  errorMessage={errorSex}
                  handleTextInput={handleTextInput}
                />
              </div>

              {/* right container */}
              <div className="right_container">
                <CustomTextInput
                  name={"phone"}
                  value={phoneNo}
                  label={"Phone No"}
                  errorMessage={errorPhoneNo}
                  handleTextInput={handleTextInput}
                />

                <div style={{ padding: "20px" }} />

                <CustomTextInput
                  name={"contactAddress"}
                  value={contactAddress}
                  label={"Contact Address"}
                  errorMessage={errorContactAddress}
                  handleTextInput={handleTextInput}
                />
              </div>
            </div>

            <div style={{ padding: "6px" }} />

            <CustomButton label="Submit" height={40} />
          </div>
        </div>

        <div style={{ padding: "6px" }} />

        {/* Proverbs bible verse */}
        <p className="proverbs_bible_verse">
          <p>Proverbs 3:5-6 (NIV)</p>
          <p>
            "Trust in the Lord with all your heart and lean not on your own{" "}
          </p>
          <p>
            understanding; in all your ways submit to Him, and He will make your{" "}
          </p>
          <p>paths straight." </p>
        </p>
      </div>
    </div>
  );
};

export default FirstTimerPage;
