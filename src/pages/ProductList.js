import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Search from "../components/Search";
import { withRouter } from "react-router";
import Loading from "./Loading";
import Popper from "popper.js";
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

  const sortList = [
    { id: 1, name: "Price low to high" },
    { id: 2, name: "Price high to low" },
  ];
  const [sortDropDown, setSortDropDown] = React.useState(false);
  const sortBtnDropdownRef = React.createRef();
  const sortDropdownRef = React.createRef();
  const openSortDropdown = () => {
    new Popper(sortBtnDropdownRef.current, sortDropdownRef.current, {
      placement: "bottom-start",
    });
    setSortDropDown(true);
  };
  const closeSortDropdown = () => {
    setSortDropDown(false);
  };
  const color = "white";
  let bgColor;
  color === "white"
    ? (bgColor = "bg-gray-800")
    : (bgColor = "bg-" + color + "-500");

  const highToLow = () => {
    // setItemList(itemList.sort());
    console.log("done");
  };
  const lowToHigh = () => {
    // setItemList(itemList.sort());
    console.log("done");
  };

  console.log(props.location);

  if (load) {
    return <Loading />;
  }
  return (
    <main className="my-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-between flex-row sm:items-center">
          <div>
            <h3 className="text-gray-700 sm:text-2xl text-md font-medium capitalize">
              <Link to="/" className="text-gray-500 pr-2">
                Home /
              </Link>
              {title}
            </h3>
            <span className="mt-3 text-sm text-gray-500">
              {itemList.length} Products
            </span>
          </div>
          <div className="sm:w-1/3 w-auto flex sm:justify-end justify-start">
            <button
              type="button"
              ref={sortBtnDropdownRef}
              onClick={() => {
                sortDropDown ? closeSortDropdown() : openSortDropdown();
              }}
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
            <div
              ref={sortDropdownRef}
              className={
                (sortDropDown ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg"
              }
              // style={{ minWidth: "12rem" }}
            >
              {sortList.map((s, index) => (
                <a
                  key={index}
                  href="#sort"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:bg-blue-700 hover:text-white" +
                    (color === "white" ? " text-gray-800" : "text-white")
                  }
                  onClick={() => {
                    if (s.name.includes("low")) {
                      lowToHigh();
                    } else {
                      highToLow();
                    }
                  }}
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {itemList &&
            itemList.map((item, index) => (
              <Link
                to={{
                  pathname: "/productDetail",
                  search: `${item.title}`,
                  data: { item },
                  category: { title },
                }}
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
                  <button
                    class="
                    transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 p-2 rounded-full mx-5 -mb-4  focus:outline-none
                    flex-none flex items-center justify-center w-9 h-9 text-gray-400 border border-blue-500 hover:animate-ping"
                    type="button"
                    aria-label="like"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="fill-current text-blue-500"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="pb-4">
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 capitalize truncate">
                      {item.title}
                    </h3>
                    <span className="text-gray-500 mt-2 font-medium">
                      ${item.price}
                      <span className="mx-2 text-xs line-through">
                        ${(item.price + (item.price * 35) / 100).toFixed(2)}
                      </span>
                      <span className="text-blue-700 text-xs">(35% off)</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
        {itemList.length > 12 ? (
          <div className="flex justify-center">
            <div className="flex rounded-md mt-8">
              <Link
                to="#"
                className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white"
              >
                <span>Previous</span>
              </Link>
              <Link
                to="#"
                className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
              >
                <span>1</span>
              </Link>
              <Link
                to="#"
                className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
              >
                <span>2</span>
              </Link>
              <Link
                to="#"
                className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
              >
                <span>3</span>
              </Link>
              <Link
                to="#"
                className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white"
              >
                <span>Next</span>
              </Link>
            </div>
          </div>
        ) : undefined}
      </div>
    </main>
  );
}

export default withRouter(ProductList);
