/* eslint-disable react/prop-types */
import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import Navbar from "./Navbar";
function Header({ changeLanguage }) {
  const [showModal, setShowModal] = React.useState(false);
  const [showSignUpModal, setShowSignupModal] = React.useState(false);

  return (
    <>
      <Navbar
        setShowSignupModal={setShowSignupModal}
        setShowModal={setShowModal}
        changeLanguage={changeLanguage}
      />
      <Login showModal={showModal} setShowModal={setShowModal} />
      <Signup showModal={showSignUpModal} setShowModal={setShowSignupModal} />
    </>
  );
}

export default Header;
