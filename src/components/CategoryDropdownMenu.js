/* eslint-disable react/prop-types */
import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import categories from "../locatlData/categoriesData";
function CategoryDropdownMenu(props) {
  const { catDropdownRef, catDropDown } = props;

  return (
    <div
      ref={catDropdownRef}
      className={
        (catDropDown ? "block " : "hidden ") +
        "bg-white  text-base z-50 float-left py-2 list-none text-left rounded shadow-lg"
      }
      // style={{ minWidth: "12rem" }}
    >
      {categories &&
        categories.map((category, index) => (
          <Link
            key={index}
            to={{
              pathname: "/productList",
              search: `${category.catName}`,
              title: `${category.title}`,
            }}
            className={
              "text-gray-800 text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:bg-blue-700 hover:text-white"
            }
          >
            <FormattedMessage id={category.catName} />
          </Link>
        ))}
    </div>
  );
}

export default CategoryDropdownMenu;
