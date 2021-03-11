import React from "react";
import data from "../locatlData/data";
import Loading from "./Loading";
import { Link } from "react-router-dom";
function Checkout() {
  const [stepperName, setStepperName] = React.useState("Bag");
  const [itemList, setItemList] = React.useState([]);
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setItemList(data.slice(3, 6));
    setLoad(false);
  }, []);

  if (load) {
    return <Loading />;
  }

  return (
    <div className="p-5">
      <div className=" sm:mx-24 sm:px-16 px-4 mx-auto">
        <div className="flex items-center">
          <div
            className={
              (stepperName === "Bag" ? "text-white " : "text-blue-700 ") +
              "flex items-center relative"
            }
          >
            <div
              className={
                (stepperName === "Bag" ? "bg-blue-700 " : "") +
                "rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  border-blue-700"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-bookmark "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-blue-700">
              Bag
            </div>
          </div>
          <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-blue-700"></div>
          <div
            className={
              (stepperName === "Address" ? "text-white " : "text-blue-700 ") +
              "flex items-center relative"
            }
          >
            <div
              className={
                (stepperName === "Address" ? "bg-blue-700 " : "") +
                "rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  border-blue-700"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-user-plus "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>

            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-blue-700">
              Address
            </div>
          </div>
          <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-blue-700"></div>
          <div
            className={
              (stepperName === "Payment" ? "text-white " : "text-blue-700 ") +
              "flex items-center relative"
            }
          >
            <div
              className={
                (stepperName === "Payment" ? "bg-blue-700 " : "") +
                "rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  border-blue-700"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-mail "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-blue-700">
              Payment
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between mt-12 ">
          <div className="w-3/4 shadow-md rounded-b-md mr-2">
            {itemList.map((item) => (
              <div
                key={item.id}
                className="flex flex-row justify-between items-center border border-gray-300 rounded-lg shadow-inner mb-4 p-4"
              >
                <div className="w-1/4 flex justify-center items-center">
                  <img
                    src={item.image}
                    className="w-20 bg-gray-300"
                    alt="Thumbnail"
                  />
                </div>
                <div className="w-1/2 flex flex-col justify-start">
                  <span className="text-md font-medium">{item.title}</span>
                  <div className="my-2">
                    <span className="text-sm font-normal pr-4">Quantity</span>
                    <input
                      className="px-2 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-700 transition-colors"
                      placeholder="1"
                      type="number"
                      min="1"
                      max="30"
                      step="1"
                    />
                  </div>
                </div>
                <div className="w-1/3 flex flex-col justify-around items-center">
                  <span className="text-lg font-normal">${item.price}</span>
                  <Link
                    to="/"
                    className="mt-2 flex items-center text-blue-700 border-blue-200  border-2 p-2 rounded-lg hover:bg-blue-700 hover:text-white"
                  >
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                    <span className="pl-2">Move to wishlist</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/4 flex flex-col justify-between shadow-md rounded-b-md ">
            <div className="py-2 border-b-2 rounded-b-lg  border-gray-200 px-2 shadow-inner">
              <span className="text-sm uppercase font-medium tracking-normal">
                Coupons
              </span>
              <div className="flex flex-row justify-between items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
                <span className="text-sm capitalize  font-medium tracking-normal">
                  Apply coupon
                </span>
                <button className=" text-blue-700 border-blue-200  border-2 p-2 rounded-lg hover:bg-blue-700 hover:text-white">
                  Apply
                </button>
              </div>
            </div>
            <div className="py-2 border-b-2 rounded-b-lg  border-gray-200 px-2 shadow-inner">
              <span className="text-sm uppercase font-medium tracking-normal">
                gifting and personalization
              </span>
              <div className="h-28 my-1 bg-blue-100 border-gray-700 border-1 shadow-inner flex flex-row justify-between items-center">
                <div className="w-1/3 flex justify-center items-center font-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="fill-current text-blue-500 font-hairline"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                      clip-rule="evenodd"
                    />
                    <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                  </svg>
                </div>
                <div className="flex flex-col space-y-1 justify-between items-start p-2">
                  <span className="text-xs capitalize  font-medium tracking-normal">
                    Buying for loved ones ?
                  </span>
                  <span className="text-xs capitalize font-normal tracking-tight">
                    Gift wrapped and personalized message on card , Only for $
                    25
                  </span>
                  <button className="capitalize font-bold text-xs text-blue-700">
                    Add gift wrap
                  </button>
                </div>
              </div>
            </div>
            <div className="py-2 border-b-2 rounded-b-lg  border-gray-200 px-2 shadow-inner">
              <span className="text-sm uppercase font-medium tracking-normal">
                Price details
              </span>
              <div className="flex flex-row space-x-2 justify-between border-gray-200 border-b-2 py-2">
                <div className="w-11/12 flex flex-col justify-between text-xs font-normal tracking-normal">
                  <span>Total MRP</span>
                  <span>Discount on MRP</span>
                  <span>Coupon Discount</span>
                </div>
                <div className="w-1/4 flex flex-col justify-between text-xs font-normal tracking-tight">
                  <span>$878.99</span>
                  <span className="text-gray-500">-$307.65</span>
                  <span>No</span>
                </div>
              </div>
              <div className="py-2 flex flex-col justify-between space-y-2">
                <div className="flex flex-row space-x-2 justify-between">
                  <div className="w-11/12 flex flex-col justify-between text-xs font-normal tracking-tight">
                    <span className="font-medium">Total MRP</span>
                  </div>
                  <div className="w-1/4 flex flex-col justify-between text-xs font-normal tracking-tight">
                    <span>$571.34</span>
                  </div>
                </div>
                <button className="text-blue-700 border-blue-200  border-2 p-2 rounded-lg hover:bg-blue-700 hover:text-white">
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Checkout;
