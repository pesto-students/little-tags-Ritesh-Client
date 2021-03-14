/* eslint-disable react/prop-types */
import React from "react";
import Popper from "popper.js";
import CategoryDropdownMenu from "./CategoryDropdownMenu";
import { FormattedMessage } from "react-intl";
function CategoryDropdown(props) {
  const { menuOpen } = props;
  const [catDropDown, setCatDropDown] = React.useState(false);
  const catBtnDropdownRef = React.createRef();
  const catDropdownRef = React.createRef();
  const openCatDropdown = () => {
    new Popper(catBtnDropdownRef.current, catDropdownRef.current, {
      placement: "auto",
    });
    setCatDropDown(true);
  };
  const closeCatDropdown = () => {
    setCatDropDown(false);
  };
  if (menuOpen) {
    return (
      <>
        <span
          onClick={() => {
            catDropDown ? closeCatDropdown() : openCatDropdown();
          }}
          ref={catBtnDropdownRef}
          type="submit"
          className="text-black hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          <FormattedMessage id="categories" />
        </span>
        <CategoryDropdownMenu
          catDropdownRef={catDropdownRef}
          catDropDown={catDropDown}
        />
      </>
    );
  }
  return (
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
        <FormattedMessage id="categories" />
      </button>
      <CategoryDropdownMenu
        catDropdownRef={catDropdownRef}
        catDropDown={catDropDown}
      />
    </div>
  );
}

export default CategoryDropdown;
