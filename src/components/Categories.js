import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import categories from "../locatlData/categoriesData";
function Categories() {
  return (
    <div className="p-12">
      <h3 className="text-black-600 text-2xl font-medium uppercase">
        <FormattedMessage id="categoriesTitle" />
      </h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-6">
        {categories.map((cat, index) => (
          <Link
            key={index}
            to={{
              pathname: "/productList",
              search: `${cat.catName}`,
              title: `${cat.title}`,
            }}
            className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <div
              className="flex items-end justify-end h-56 w-full bg-cover"
              style={{
                backgroundImage: `url(${cat.catImg})`,
              }}
            ></div>
            <div className="px-5 py-3">
              <h3 className="text-gray-700 uppercase ">
                <FormattedMessage id={cat.catName} />
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
