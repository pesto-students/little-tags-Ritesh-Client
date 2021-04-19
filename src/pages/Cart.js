/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import PriceDetail from "../components/PriceDetail";
import { FormattedMessage } from "react-intl";
import { toast } from "react-toastify";
import { store } from "../redux/store";
import CheckoutMobileButton from "../components/CheckoutMobileButton";
function Cart(props) {
  const {
    itemList,
    handleClick,
    handleMoveToWishlist,
    handleRemoveFromCart,
  } = props;
  const checkUser = () => {
    if (store.getState().userReducer.userData.userName === undefined) {
      toast(`Please log in`);
      return;
    } else {
      handleClick("next");
    }
  };
  return (
    <div className="flex sm:flex-row flex-col mt-12">
      <div className="w-3/4 sm:block hidden shadow-md rounded-b-md mr-2">
        {itemList.map(item => (
          <div
            key={item._id}
            className="flex flex-row justify-between items-center border border-gray-300 rounded-lg shadow-inner mb-4 p-4"
          >
            <div className="w-1/4 h-28  p-2 flex justify-center items-center">
              <img
                style={{ maxWidth: "100%", maxHeight: "7rem" }}
                src={item.image}
                alt="Thumbnail"
              />
            </div>
            <div className="w-1/2 flex flex-col justify-start space-y-4">
              <span className="text-md font-medium truncate">{item.title}</span>
              <div className="flex mt-6 items-center text-sm font-normal">
                {item.categoryName.includes("clothing") ? (
                  <div className="flex items-center mr-4">
                    <span className="mr-3">
                      <FormattedMessage id="Size" />
                    </span>
                    <div className="relative bg-transparent">
                      <select
                        value={item.size}
                        onChange={s => console.log(s.target.value)}
                        className="rounded border bg-transparent appearance-none border-blue-200 py-2 focus:outline-none focus:border-red-500 pl-3 pr-10"
                      >
                        <option value="sm">SM</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                ) : undefined}
                <div className="flex items-center">
                  <span className="mr-3">
                    <FormattedMessage id="Quantity" />
                  </span>
                  <div className="relative">
                    <input
                      className="w-auto px-3 py-2  border-2 border-blue-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="1"
                      value={item.quantity}
                      onChange={q => console.log(q.target.value)}
                      type="number"
                      min="1"
                      max="30"
                      step="1"
                    />
                  </div>
                </div>
              </div>
              <div className="text-left text-sm font-medium tracking-wide">
                <span className="font-semibold text-gray-600">
                  <FormattedMessage id="Price" /> :
                  <span className="text-gray-500 mt-2">
                    ${item.price}
                    <span className="mx-2 text-xs line-through">
                      ${(item.price + (item.price * 35) / 100).toFixed(2)}
                    </span>
                    <span className="text-blue-700">
                      {" "}
                      (35% <FormattedMessage id="off" />){" "}
                    </span>
                  </span>
                </span>
              </div>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center text-sm font-light">
              <div className="w-hull">
                <button
                  onClick={() => handleMoveToWishlist(item)}
                  className="my-2 capitalize flex items-center text-blue-700 border-blue-200  border-2 p-2 rounded-lg hover:bg-blue-700 hover:text-white"
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
                  <span className="pl-2">
                    <FormattedMessage id="MoveToWishList" />
                  </span>
                </button>
                <button
                  onClick={() => handleRemoveFromCart(item._id)}
                  className="flex w-full items-center text-blue-700 border-blue-200  border-2 p-2 rounded-lg hover:bg-blue-700 hover:text-white"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  <span className="pl-2">
                    <FormattedMessage id="Remove" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* mobile view for cart item */}
      <div className="sm:hidden block">
        <div className="shadow-md rounded-b-md">
          {itemList.map(item => (
            <div
              key={item._id}
              className="flex flex-col justify-between items-center border border-gray-300 rounded-lg shadow-inner mb-2 p-2"
            >
              <div className="w-full flex flex-row justify-around">
                <div className="w-2/5 flex justify-center items-center mr-1">
                  <img
                    style={{ maxHeight: "7rem" }}
                    src={item.image}
                    alt="Thumbnail"
                  />
                </div>
                <div className="w-3/5 flex flex-col justify-start">
                  <span className="text-md font-medium">{item.title}</span>
                  <div className="w-2/3  flex flex-col justify-between mt-2 text-xs font-light">
                    {"men clothing".includes("clothing") ? (
                      <div className="flex items-center justify-between">
                        <span className="mr-2">
                          <FormattedMessage id="Size" />
                        </span>
                        <div className="relative">
                          <select
                            value={item.size}
                            onChange={s => console.log(s.target.value)}
                            className="rounded-lg border-2 appearance-none border-blue-100 py-2 focus:outline-none bg-transparent pl-3 pr-10"
                          >
                            <option value="sm">SM</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                          </select>
                          <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                            >
                              <path d="M6 9l6 6 6-6"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    ) : undefined}
                    <div className="flex items-center justify-between mt-2 text-xs font-light">
                      <span className="pr-2">
                        <FormattedMessage id="Quantity" />
                      </span>
                      <input
                        className="py-2 text-black px-2 border-2 border-blue-100 rounded-lg focus:outline-none focus:border-blue-700 transition-colors"
                        placeholder="1"
                        type="number"
                        value={item.quantity}
                        onChange={q => console.log(q.target.value)}
                        min="1"
                        max="30"
                        step="1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm font-medium tracking-wide my-1">
                <span className="font-semibold text-gray-600">
                  <FormattedMessage id="Price" /> :
                  <span className="text-gray-500 mt-2">
                    ${item.price}
                    <span className="mx-2 text-xs line-through">
                      ${(item.price + (item.price * 35) / 100).toFixed(2)}
                    </span>
                    <span className="text-blue-700">
                      {" "}
                      (35% <FormattedMessage id="off" />){" "}
                    </span>
                  </span>
                </span>
              </div>
              <div className="mt-2 flex flex-row justify-between space-x-1 items-center text-sm font-light">
                <Link
                  to="/"
                  className="flex items-center text-blue-700 border-blue-200  border-2 p-2 rounded-lg hover:bg-blue-700 hover:text-white"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  <span className="pl-2">
                    <FormattedMessage id="Remove" />
                  </span>
                </Link>
                <Link
                  to="/"
                  className="flex items-center text-blue-700 border-blue-200  border-2 p-2 rounded-lg hover:bg-blue-700 hover:text-white"
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
                  <span className="pl-2">
                    <FormattedMessage id="MoveToWishList" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sm:w-1/4 flex flex-col space-y-2 shadow-md rounded-b-md ">
        <div className="py-2 border-b-2 rounded-b-lg  border-gray-200 px-2 shadow-inner">
          <span className="text-sm uppercase font-medium tracking-normal">
            <FormattedMessage id="Coupons" />
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
            <FormattedMessage id="ApplyCoupons">
              {placeholder => (
                <input
                  type="text"
                  placeholder={placeholder}
                  className="w-4/6 mx-1 text-gray-700 border-b border-blue-200 focus:outline-none focus:ring focus:border-blue-300"
                />
              )}
            </FormattedMessage>
            <button className=" text-blue-700 border-blue-200  border-2 p-2 rounded-lg hover:bg-blue-700 hover:text-white">
              <FormattedMessage id="Apply" />
            </button>
          </div>
        </div>
        <div className="py-2 border-b-2 rounded-b-lg  border-gray-200 px-2 shadow-inner">
          <span className="text-sm uppercase font-medium tracking-normal">
            <FormattedMessage id="GiftingAndPersonalization" />
          </span>
          <div className="h-28 my-1 bg-blue-100 border-gray-700 border-1 shadow-inner flex flex-row justify-between">
            <div className="w-1/3 flex justify-center items-center font-normal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="fill-current text-blue-500 font-hairline"
              >
                <path
                  fillRule="evenodd"
                  d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                  clipRule="evenodd"
                />
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
              </svg>
            </div>
            <div className="flex flex-col space-y-1 justify-between items-start p-2">
              <span className="text-xs capitalize  font-medium tracking-normal">
                <FormattedMessage id="BuyingForLovedOnes" />
              </span>
              <span className="text-xs capitalize font-normal tracking-tight">
                <FormattedMessage id="GiftWrap" />
              </span>
              <button className="capitalize font-bold text-xs text-blue-700">
                <FormattedMessage id="AddGiftWrap" />
              </button>
            </div>
          </div>
        </div>
        <PriceDetail itemList={itemList} />
        <button
          onClick={() => {
            checkUser();
          }}
          className="text-blue-700 border-blue-200  border-2 p-2 rounded-lg hover:bg-blue-700 hover:text-white"
        >
          <FormattedMessage id="PlaceOrder" />
        </button>
      </div>
      <CheckoutMobileButton
        handleClick={handleClick}
        itemList={itemList}
        buttonName={"PlaceOrder"}
      />
    </div>
  );
}

export default Cart;
