import React from "react";
import Popper from "popper.js";
import { FormattedMessage } from "react-intl";
// import { Link } from "react-router-dom";
import Search from "./Search";
function Navbar(props) {
  const { setShowModal, changeLanguage } = props;
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
  const mobileMenuItem = [
    { id: 1, menuName: "Category" },
    { id: 2, menuName: "Wishlist" },
    { id: 3, menuName: "Profile" },
  ];
  return (
    <nav className="bg-white-800 container ">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 border-solid border-b-2 border-gray-100 lg:pb-0">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={(menuOpen ? "hidden " : "block ") + "h-6 w-6"}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={(menuOpen ? "block " : "hidden ") + "h-6 w-6"}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* title and left menu */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            {/* title */}
            <a
              href="/"
              className="flex-shrink-0 flex items-center cursor-pointer"
            >
              <img
                className="block h-8 w-auto mr-2"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              <div className="hidden lg:block h-8 w-auto flex-shrink-0 text-gray-800 mr-16">
                <span className="text-3xl max-w-xl text-blue-900 leading-tight">
                  <FormattedMessage id="title" />
                </span>
              </div>
            </a>
            {/* left menu item */}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <div
                  onMouseEnter={() => {
                    catDropDown ? closeCatDropdown() : openCatDropdown();
                  }}
                  onMouseLeave={() => {
                    if (catDropDown) closeCatDropdown();
                  }}
                >
                  <button
                    onClick={() => {
                      catDropDown ? closeCatDropdown() : openCatDropdown();
                    }}
                    ref={catBtnDropdownRef}
                    className="text-black hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Category
                  </button>
                  <div
                    ref={catDropdownRef}
                    className={
                      (catDropDown ? "block " : "hidden ") +
                      (color === "white" ? "bg-white " : bgColor + " ") +
                      "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg"
                    }
                    // style={{ minWidth: "12rem" }}
                  >
                    {categories &&
                      categories.map((category, index) => (
                        <a
                          key={index}
                          href="/productList"
                          className={
                            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:bg-blue-700 hover:text-white" +
                            (color === "white"
                              ? " text-gray-800"
                              : "text-white")
                          }
                        >
                          <FormattedMessage id={category.catName} />
                        </a>
                      ))}
                  </div>
                </div>
                <button className="text-black hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Wishlist
                </button>
              </div>
            </div>
          </div>
          {/* search */}
          <div className="w-1/3 hidden sm:block">
            <Search />
          </div>
          {/* right menu icon */}
          <div className="absolute inset-y-0 right-0 flex sm:space-x-3 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* profile */}
            <div
              onMouseEnter={() => {
                profileDropDown
                  ? closeProfileDropdown()
                  : openProfileDropdown();
              }}
              onMouseLeave={() => {
                if (profileDropDown) closeProfileDropdown();
              }}
              className="hidden sm:block"
            >
              <button
                ref={profileBtnDropdownRef}
                onClick={() => {
                  profileDropDown
                    ? closeProfileDropdown()
                    : openProfileDropdown();
                }}
                type="submit"
                className=" p-1 rounded-md  px-4 py-2 text-black-700 fill-current hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
              </button>
              {/* profile drop down */}
              <div
                ref={profileDropdownRef}
                className={
                  (profileDropDown ? "block " : "hidden ") +
                  (color === "white" ? "bg-white " : bgColor + " ") +
                  "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg"
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
                      href={`/${p.catName}`}
                      className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:bg-blue-700 hover:text-white" +
                        (color === "white" ? " text-gray-800" : "text-white")
                      }
                    >
                      <FormattedMessage id={p.catName} />
                    </a>
                  ))}
              </div>
            </div>
            {/* cart */}
            <a
              href="/checkout"
              className=" p-1 rounded-md  px-4 py-2 text-black-700 fill-current hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">cart</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </a>
            {/* globe */}
            {/* globe for mobile  */}
            <button
              className="block sm:hidden  p-1 rounded-md  px-4 py-2 text-black-700 fill-current hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              ref={langBtnDropdownRef}
              onClick={() => {
                dropdownPopoverShow ? closeLangDropdown() : openLangDropdown();
              }}
              type="submit"
            >
              <span className="sr-only">cart</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </button>
            {/* globe for lg devices */}
            <div
              onMouseEnter={() => {
                dropdownPopoverShow ? closeLangDropdown() : openLangDropdown();
              }}
              onMouseLeave={() => {
                if (dropdownPopoverShow) closeLangDropdown();
              }}
              className="hidden sm:block"
            >
              <button
                className=" p-1 rounded-md  px-4 py-2 text-black-700 fill-current hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                ref={langBtnDropdownRef}
                onClick={() => {
                  dropdownPopoverShow
                    ? closeLangDropdown()
                    : openLangDropdown();
                }}
                type="submit"
              >
                <span className="sr-only">cart</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </button>
              {/* globe dropdown */}
              <div
                ref={langDropdownRef}
                className={
                  (dropdownPopoverShow ? "block " : "hidden ") +
                  (color === "white" ? "bg-white " : bgColor + " ") +
                  "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg"
                }
                // style={{ minWidth: "12rem" }}
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
                  Es - Español
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="sm:hidden text-center">
        <div
          className={
            (menuOpen ? "block " : "hidden ") + "px-2 pt-2 pb-3 space-y-1"
          }
        >
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          {mobileMenuItem.map((menu) => (
            <a
              href="#{menu.menuName}"
              key={menu.id}
              className="text-black hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {menu.menuName}
            </a>
          ))}
        </div>
        <div className="w-full p-4">
          <Search />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
