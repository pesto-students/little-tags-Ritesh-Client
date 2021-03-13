import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
function CategoryDropdownMenu(props) {
  const { catDropdownRef, catDropDown } = props;
  const categories = [
    { id: 1, catName: "menClothing" },
    { id: 2, catName: "womenClothing" },
    { id: 3, catName: "jewelry" },
    { id: 4, catName: "electronics" },
  ];
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
            to="/productList"
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
