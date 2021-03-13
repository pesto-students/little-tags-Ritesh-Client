import React from "react";
import Popper from "popper.js";
import LangDropDownMenu from "./LangDropDownMenu";
function LangDropdown(props) {
  const { changeLanguage } = props;
  const [langDropdown, setLangDropdown] = React.useState(false);
  const langBtnDropdownRef = React.createRef();
  const langDropdownRef = React.createRef();
  const openLangDropdown = () => {
    new Popper(langBtnDropdownRef.current, langDropdownRef.current, {
      placement: "bottom-left",
    });
    setLangDropdown(true);
  };
  const closeLangDropdown = () => {
    setLangDropdown(false);
  };
  return (
    <>
      <div className="sm:hidden w-16 items-center flex flex-col">
        <button
          className={
            (langDropdown ? "mt-24 space-y-24" : "") +
            "px-2 py-2 pr-4 pl-4 pt-2 pb-2 rounded-md text-black-700 fill-current hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          }
          ref={langBtnDropdownRef}
          onClick={() => {
            langDropdown ? closeLangDropdown() : openLangDropdown();
          }}
          type="submit"
        >
          <span className="sr-only">language</span>
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
        <div className="z-50 mr-8">
          <LangDropDownMenu
            langDropdownRef={langDropdownRef}
            langDropdown={langDropdown}
            changeLanguage={changeLanguage}
            closeLangDropdown={closeLangDropdown}
            openLangDropdown={openLangDropdown}
          />
        </div>
      </div>
      {/* <div className="sm:hidden flex flex-grow flex-col space-y-1">
        <button
          className="flex sm:hidden  p-1 rounded-md  px-4 py-2 text-black-700 fill-current hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          ref={langBtnDropdownRef}
          onClick={() => {
            console.log(langDropdown);
            langDropdown ? closeLangDropdown() : openLangDropdown();
          }}
          type="submit"
        >
          <span className="sr-only">language</span>
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

        <LangDropDownMenu
          langDropdownRef={langDropdownRef}
          langDropdown={langDropdown}
          changeLanguage={changeLanguage}
          closeLangDropdown={closeLangDropdown}
          openLangDropdown={openLangDropdown}
        />
      </div> */}
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
        <LangDropDownMenu
          langDropdownRef={langDropdownRef}
          langDropdown={langDropdown}
          changeLanguage={changeLanguage}
          closeLangDropdown={closeLangDropdown}
          openLangDropdown={openLangDropdown}
        />
      </div>
    </>
  );
}

export default LangDropdown;
