import React from "react";
import Popper from "popper.js";
function LangDropdown(props) {
  const { changeLanguage } = props;
  const [langDropdown, setLangDropdown] = React.useState(false);
  const langBtnDropdownRef = React.createRef();
  const langDropdownRef = React.createRef();
  const openLangDropdown = () => {
    new Popper(langBtnDropdownRef.current, langDropdownRef.current, {
      placement: "auto",
    });
    setLangDropdown(true);
  };
  const closeLangDropdown = () => {
    setLangDropdown(false);
  };
  return (
    <>
      <button
        className="block sm:hidden  p-1 rounded-md  px-4 py-2 text-black-700 fill-current hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        ref={langBtnDropdownRef}
        onClick={() => {
          langDropdown ? closeLangDropdown() : openLangDropdown();
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
          langDropdown ? closeLangDropdown() : openLangDropdown();
        }}
        onMouseLeave={() => {
          if (langDropdown) closeLangDropdown();
        }}
        className="hidden sm:block"
      >
        <button
          className=" p-1 rounded-md  px-4 py-2 text-black-700 fill-current hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          ref={langBtnDropdownRef}
          onClick={() => {
            langDropdown ? closeLangDropdown() : openLangDropdown();
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
            (langDropdown ? "block " : "hidden ") +
            "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg"
          }
          // style={{ minWidth: "12rem" }}
        >
          <a
            href="#lang:en"
            className={
              "text-gray-900 text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:bg-blue-700 hover:text-white"
            }
            onClick={() => {
              changeLanguage("en");
              langDropdown ? closeLangDropdown() : openLangDropdown();
            }}
          >
            En - English
          </a>
          <a
            href="#lang:sp"
            className={
              "text-gray-800 text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:bg-blue-700 hover:text-white"
            }
            onClick={() => {
              changeLanguage("sp");
              langDropdown ? closeLangDropdown() : openLangDropdown();
            }}
          >
            Es - Español
          </a>
        </div>
      </div>
    </>
  );
}

export default LangDropdown;
