import React from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";
function ProductList() {
  const products = [
    {
      id: 1,
      pName: "Old watch",
      pImg:
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80",
      price: 1850,
    },
    {
      id: 2,
      pName: "Classic watch",
      pImg:
        "https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      price: 1260,
    },
    {
      id: 3,
      pName: "Old watch",
      pImg:
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80",
      price: 1260,
    },
    {
      id: 4,
      pName: "Classic watch",
      pImg:
        "https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      price: 1260,
    },
  ];

  return (
    <main className="my-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-between sm:flex-row flex-col sm:items-center">
          <div>
            <h3 className="text-gray-700 text-2xl font-medium">Product List</h3>
            <span className="mt-3 text-sm text-gray-500">200+ Products</span>
          </div>
          <div className="sm:w-1/3 w-auto flex justify-between ">
            <div className="w-full mr-2">
              <Search />
            </div>
            <button
              type="button"
              className="flex items-center text-gray-700 px-3 py-1 border font-medium rounded"
            >
              <span className="text-lg pr-2">Sort</span>
              <svg
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                className="w-5 h-5 mr-1"
              >
                <g className="">
                  <path d="M0 0h24v24H0z" fill="none" className=""></path>
                  <path
                    d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"
                    className=""
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {products &&
            products.map((product, index) => (
              <Link
                to="/"
                key={index}
                className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
              >
                <div
                  className="flex items-end justify-end h-56 w-full bg-cover"
                  style={{
                    backgroundImage: `url(${product.pImg})`,
                  }}
                >
                  <div className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                </div>
                <div className="px-5 py-3">
                  <h3 className="text-gray-700 uppercase">{product.pName}</h3>
                  <span className="text-gray-500 mt-2">{product.price}</span>
                </div>
              </Link>
            ))}
        </div>
        <div className="flex justify-center">
          <div className="flex rounded-md mt-8">
            <Link
              to="/"
              className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white"
            >
              <span>Previous</span>
            </Link>
            <Link
              to="/"
              className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
            >
              <span>1</span>
            </Link>
            <Link
              to="/"
              className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
            >
              <span>2</span>
            </Link>
            <Link
              to="/"
              className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
            >
              <span>3</span>
            </Link>
            <Link
              to="/"
              className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white"
            >
              <span>Next</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductList;
