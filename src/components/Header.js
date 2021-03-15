/* eslint-disable react/prop-types */
import React from "react";
import Login from "./Login";
import Navbar from "./Navbar";
function Header({ changeLanguage }) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <Navbar setShowModal={setShowModal} changeLanguage={changeLanguage} />
      <Login showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default Header;
