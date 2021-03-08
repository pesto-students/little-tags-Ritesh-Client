import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";
function ProductList() {
import { withRouter } from "react-router";
import Loading from "./Loading";
function ProductList(props) {
  const { title } = props.location;
  const [itemList, setItemList] = useState([]);
  const [load, setLoad] = React.useState(true);
  useEffect(() => {
    if (title) {
      fetch(`https://fakestoreapi.com/products/category/${title}`)
        .then((r) => r.json())
        .then((res) => {
          setItemList(res);
          setLoad(false);
        })
        .catch((e) => {
          alert(e);
          setLoad(false);
        });
    } else {
      props.history.goBack();
    }
  }, [title, props.history]);
  if (load) {
    return <Loading />;
  }
  return (
    <main className="my-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-between sm:flex-row flex-col sm:items-center">
          <div>
            <h3 className="text-gray-700 text-2xl font-medium capitalize">
              {title}
            </h3>
            <span className="mt-3 text-sm text-gray-500">
              {itemList.length} Products
            </span>
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
          {itemList &&
            itemList.map((item, index) => (
              <Link
                to="/productDetail"
                key={index}
                className="relative hover-trigger w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
              >
                <div
                  className="flex items-end justify-end h-56 w-full bg-contain bg-no-repeat"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundPosition: "center",
                  }}
                >
                  {/* <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div> */}
                </div>
                <div className="pb-4">
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 capitalize truncate">
                      {item.title}
                    </h3>
                    <span className="text-gray-500 mt-2">${item.price}</span>
                  </div>
                  {/* <div className="hover-target flex justify-around items-center">
                    <button className="transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 text-white py-2 px-4  rounded">
                      Add to cart
                    </button>
                    <button className="text-white py-2 px-4 bg-blue-700 rounded">
                      Move to wishlist
                    </button>
                  </div> */}
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

export default withRouter(ProductList);
