import React from "react";
import { FormattedMessage } from "react-intl";
import Login from "./Login";
import Popper from "popper.js";

function Header({ props, changeLanguage }) {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const langBtnDropdownRef = React.createRef();
  const langDropdownRef = React.createRef();
  const openLangDropdown = () => {
    new Popper(langBtnDropdownRef.current, langDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeLangDropdown = () => {
    setDropdownPopoverShow(false);
  };

  // login
  const [showModal, setShowModal] = React.useState(false);
  //categories
  const categories = [
    { id: 1, catName: "menClothing" },
    { id: 2, catName: "womenClothing" },
    { id: 3, catName: "jewelry" },
    { id: 4, catName: "electronics" },
  ];
  const [catDropDown, setCatDropDown] = React.useState(false);
  const catBtnDropdownRef = React.createRef();
  const catDropdownRef = React.createRef();
  const openCatDropdown = () => {
    new Popper(catBtnDropdownRef.current, catDropdownRef.current, {
      placement: "bottom-start",
    });
    setCatDropDown(true);
  };
  const closeCatDropdown = () => {
    setCatDropDown(false);
  };

  //profile
  const profile = [
    { id: 1, catName: "orderHistory" },
    { id: 2, catName: "trackOrder" },
    { id: 3, catName: "contactUs" },
    { id: 4, catName: "editProfile" },
  ];
  const [profileDropDown, setProfileDropDown] = React.useState(false);
  const profileBtnDropdownRef = React.createRef();
  const profileDropdownRef = React.createRef();
  const openProfileDropdown = () => {
    new Popper(profileBtnDropdownRef.current, profileDropdownRef.current, {
      placement: "bottom-start",
    });
    setProfileDropDown(true);
  };
  const closeProfileDropdown = () => {
    setProfileDropDown(false);
  };
  const color = "white";
  let bgColor;
  color === "white"
    ? (bgColor = "bg-gray-800")
    : (bgColor = "bg-" + color + "-500");

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2">
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
          <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
            <span className="text-3xl md:text-4xl max-w-xl text-gray-900 leading-tight">
              <FormattedMessage id="title" />
            </span>
          </div>
          <div className="block lg:hidden ">
            <button
              id="nav"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-start px-3 py-2 border-2 rounded text-black-700 border-black-700 hover:text-black-700 hover:border-black-700"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={
            (menuOpen ? "block " : "hidden ") +
            "menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8"
          }
        >
          <div className="text-md text-black-700 lg:flex-grow">
            <button
              ref={catBtnDropdownRef}
              onClick={() =>
                catDropDown ? closeCatDropdown() : openCatDropdown()
              }
              type="submit"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              <FormattedMessage id="categories" />
            </button>
            <div
              ref={catDropdownRef}
              className={
                (catDropDown ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              {categories &&
                categories.map((category, index) => (
                  <a
                    key={index}
                    href="#categories"
                    className={
                      "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:bg-blue-700 hover:text-white" +
                      (color === "white" ? " text-gray-800" : "text-white")
                    }
                  >
                    <FormattedMessage id={category.catName} />
                  </a>
                ))}
            </div>
            <a
              href="#responsive-header"
              className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              <FormattedMessage id="wishlist" />
            </a>
          </div>
          <div className="relative mx-auto text-black-700 lg:flex hidden">
            <FormattedMessage id="searchTitle" defaultMessage="search">
              {(placeholder) => (
                <input
                  className="border-2  bg-white h-10 pl-2 pr-8 rounded text-sm focus:outline-black-rounded-full"
                  type="search"
                  name="search"
                  placeholder={placeholder}
                />
              )}
            </FormattedMessage>
            <button
              type="submit"
              className="absolute right-0 top-0 mt-3 mr-2 text-black-700"
            >
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  fill: "none",
                  height: 16,
                  width: 16,
                  stroke: "currentcolor",
                  strokeWidth: 5.33333,
                  overflow: "visible",
                }}
              >
                <g fill="none">
                  <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                </g>
              </svg>
            </button>
          </div>
          <div className="text-md text-black-700 lg:flex-grow sm:flex">
            <button
              ref={profileBtnDropdownRef}
              onClick={() => {
                profileDropDown
                  ? closeProfileDropdown()
                  : openProfileDropdown();
              }}
              type="submit"
              className="block text-md px-4 py-2 rounded text-black-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="hidden sm:block"
                style={{
                  display: "block",
                  fill: "none",
                  height: 24,
                  width: 24,
                  stroke: "currentcolor",
                  strokeWidth: 5.33333,
                  overflow: "visible",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <p className="text-sm font-normal text-center sm:hidden">
                Profile
              </p>
            </button>
            <div
              ref={profileDropdownRef}
              className={
                (profileDropDown ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <span
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent" +
                  (color === "white" ? " text-gray-800" : "text-white")
                }
              >
                <span>Welcome</span> <br />
                <p className="font-light">
                  <FormattedMessage id="profileGreet" />
                  <br />
                  <FormattedMessage id="manageOrder" />
                </p>
              </span>
              <div className="pr-2 pl-2 flex flex-row justify-between items-center">
                <a
                  href="#login"
                  className="text-white block mt-2 lg:inline-block lg:mt-2 px-4 py-2 rounded  mr-2 transition duration-500 ease-in-out bg-blue-700 hover:bg-orange-700 transform hover:-translate-y-1 hover:scale-110"
                  onClick={() => {
                    setShowModal(true);
                    profileDropDown
                      ? closeProfileDropdown()
                      : openProfileDropdown();
                  }}
                >
                  <FormattedMessage id="login" />
                </a>
                <a
                  href="#signup"
                  className="text-white block mt-2 lg:inline-block lg:mt-2 px-4 py-2 rounded  mr-2 transition duration-500 ease-in-out bg-blue-700 hover:bg-orange-700 transform hover:-translate-y-1 hover:scale-110"
                >
                  <FormattedMessage id="signUp" />
                </a>
              </div>
              <div className="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25" />
              {profile &&
                profile.map((p, index) => (
                  <a
                    key={index}
                    href="#categories"
                    className={
                      "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:bg-blue-700 hover:text-white" +
                      (color === "white" ? " text-gray-800" : "text-white")
                    }
                  >
                    <FormattedMessage id={p.catName} />
                  </a>
                ))}
            </div>
            <button
              type="submit"
              className="block text-md px-4 py-2 rounded text-black-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="hidden sm:block"
                style={{
                  display: "block",
                  fill: "none",
                  height: 24,
                  width: 24,
                  stroke: "currentcolor",
                  strokeWidth: 5.33333,
                  overflow: "visible",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <p className="text-md font-normal text-center sm:hidden">Cart</p>
            </button>
            <button
              ref={langBtnDropdownRef}
              onClick={() => {
                dropdownPopoverShow ? closeLangDropdown() : openLangDropdown();
              }}
              type="submit"
              className=" block text-md px-4 py-2 rounded text-black-700 ml-2 font-bold fill-current hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
            >
              {/* <svg
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                role='presentation'
                focusable='false'
                className='hidden sm:block'
                style={{
                  display: "block",
                  fill: "none",
                  height: 24,
                  width: 24,
                  stroke: "currentcolor",
                  strokeWidth: 5.33333,
                  overflow: "visible",
                }}>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9'
                />
              </svg> */}
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="hidden sm:block"
                style={{
                  display: "block",
                  height: 24,
                  width: 24,
                  // fill: "black",
                  stroke: "currentcolor",
                  strokeWidth: 5.33333,
                  overflow: "visible",
                }}
                {...props}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m256 0c-141.160156 0-256 114.839844-256 256s114.839844 256 256 256 256-114.839844 256-256-114.839844-256-256-256zm-15 125.65625c-22.820312-.980469-45.410156-4.1875-66.980469-9.402344 3.445313-8.164062 7.183594-16.003906 11.214844-23.433594 16.539063-30.476562 36.84375-51.863281 55.765625-59.609374zm0 30.023438v85.320312h-93.691406c1.320312-33.300781 6.996094-66.359375 16.382812-96.429688 24.875 6.265626 50.988282 10.058594 77.308594 11.109376zm0 115.320312v85.320312c-26.320312 1.050782-52.433594 4.84375-77.308594 11.109376-9.386718-30.070313-15.0625-63.128907-16.382812-96.429688zm0 115.34375v92.445312c-18.921875-7.746093-39.226562-29.132812-55.765625-59.609374-4.03125-7.429688-7.769531-15.269532-11.214844-23.433594 21.570313-5.214844 44.15625-8.421875 66.980469-9.402344zm30 0c22.820312.980469 45.410156 4.1875 66.980469 9.402344-3.445313 8.164062-7.183594 16.003906-11.214844 23.433594-16.539063 30.476562-36.84375 51.863281-55.765625 59.609374zm0-30.023438v-85.320312h93.691406c-1.320312 33.300781-6.996094 66.359375-16.382812 96.429688-24.875-6.265626-50.988282-10.058594-77.308594-11.109376zm0-115.320312v-85.320312c26.320312-1.050782 52.433594-4.84375 77.308594-11.109376 9.386718 30.070313 15.0625 63.128907 16.382812 96.429688zm0-115.34375v-92.445312c18.921875 7.746093 39.226562 29.132812 55.765625 59.609374 4.03125 7.429688 7.769531 15.269532 11.214844 23.433594-21.570313 5.214844-44.160157 8.421875-66.980469 9.402344zm82.132812-47.144531c-7.511718-13.84375-15.671874-26.046875-24.273437-36.457031 29.992187 10.242187 57.160156 26.628906 80.007813 47.644531-13.03125 6.980469-27.074219 13.042969-41.847657 18.109375-4.191406-10.179688-8.824219-19.972656-13.886719-29.296875zm-194.265624 0c-5.0625 9.324219-9.695313 19.117187-13.886719 29.296875-14.773438-5.066406-28.816407-11.132813-41.847657-18.109375 22.847657-21.015625 50.015626-37.402344 80.007813-47.644531-8.601563 10.410156-16.757813 22.609374-24.273437 36.457031zm-24.035157 57.492187c-10.238281 32.753906-16.257812 68.460938-17.554687 104.996094h-86.765625c3.210937-48.753906 21.933593-93.339844 51.292969-128.832031 16.292968 9.34375 34.136718 17.335937 53.027343 23.835937zm-17.554687 134.996094c1.296875 36.539062 7.316406 72.242188 17.554687 104.996094-18.890625 6.5-36.734375 14.492187-53.027343 23.835937-29.359376-35.492187-48.082032-80.078125-51.292969-128.832031zm27.703125 133.191406c4.191406 10.179688 8.824219 19.972656 13.886719 29.296875 7.515624 13.84375 15.671874 26.046875 24.273437 36.457031-29.992187-10.242187-57.160156-26.628906-80.003906-47.644531 13.023437-6.976562 27.070312-13.042969 41.84375-18.109375zm208.152343 29.296875c5.0625-9.324219 9.695313-19.117187 13.886719-29.296875 14.773438 5.066406 28.816407 11.132813 41.847657 18.109375-22.847657 21.015625-50.015626 37.402344-80.007813 47.644531 8.601563-10.410156 16.757813-22.609374 24.273437-36.457031zm24.035157-57.492187c10.238281-32.753906 16.257812-68.460938 17.554687-104.996094h86.765625c-3.210937 48.753906-21.933593 93.339844-51.292969 128.832031-16.292968-9.34375-34.136718-17.335937-53.027343-23.835937zm17.554687-134.996094c-1.296875-36.539062-7.316406-72.242188-17.554687-104.996094 18.890625-6.5 36.734375-14.492187 53.027343-23.835937 29.359376 35.492187 48.082032 80.078125 51.292969 128.832031zm0 0"
                />
              </svg>
              <p className="text-sm font-normal text-center sm:hidden">Lang</p>
            </button>

            <div
              ref={langDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <a
                href="#lang:en"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:bg-blue-700 hover:text-white" +
                  (color === "white" ? " text-gray-800" : "text-white")
                }
                onClick={() => {
                  changeLanguage("en");
                  dropdownPopoverShow
                    ? closeLangDropdown()
                    : openLangDropdown();
                }}
              >
                En - English
              </a>
              <a
                href="#lang:sp"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:bg-blue-700 hover:text-white" +
                  (color === "white" ? " text-gray-800" : "text-white")
                }
                onClick={() => {
                  changeLanguage("sp");
                  dropdownPopoverShow
                    ? closeLangDropdown()
                    : openLangDropdown();
                }}
              >
                Es -Español
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Login showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Header;
