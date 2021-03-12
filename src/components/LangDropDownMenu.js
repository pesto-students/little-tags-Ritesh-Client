import React from "react";

function LangDropDownMenu(props) {
  const {
    langDropdownRef,
    langDropdown,
    changeLanguage,
    closeLangDropdown,
    openLangDropdown,
  } = props;
  const languageList = [
    { id: 1, langCode: "en", langName: "English" },
    { id: 2, langCode: "sp", langName: "Español" },
  ];
  return (
    <div
      ref={langDropdownRef}
      className={
        (langDropdown ? "block " : "hidden ") +
        "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg"
      }
      // style={{ minWidth: "12rem" }}
    >
      {languageList.map((lang) => {
        return (
          <button
            key={lang.id}
            className={
              "text-gray-900 capitalize text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:bg-blue-700 hover:text-white"
            }
            onClick={() => {
              changeLanguage(lang.langCode);
              langDropdown ? closeLangDropdown() : openLangDropdown();
            }}
          >
            {lang.langCode} - {lang.langName}
          </button>
        );
      })}
    </div>
  );
}

export default LangDropDownMenu;
