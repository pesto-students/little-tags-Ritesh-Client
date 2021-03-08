import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
function Categories() {
  const categories = [
    {
      id: 1,
      title: "men clothing",
      catName: "menClothing",
      catImg:
        "https://images.unsplash.com/photo-1446214814726-e6074845b4ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80",
    },
    {
      id: 2,
      title: "women clothing",
      catName: "womenClothing",
      catImg:
        "https://images.unsplash.com/photo-1571908598047-9b0049221e4e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bGFkaWVzJTIwd2VkZGluZyUyMGluZGlhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80",
    },
    {
      id: 3,
      title: "jewelery",
      catName: "jewelery",
      catImg:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGpld2Vscnl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80",
    },
    {
      id: 4,
      title: "electronics",
      catName: "electronics",
      catImg:
        "https://images.unsplash.com/photo-1598832517527-7e5b15ee1b2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGVsZWN0cm9uaWN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80",
    },
  ];
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
