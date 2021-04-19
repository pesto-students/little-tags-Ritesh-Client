/* eslint-disable react/prop-types */
import React from "react";
import { FormattedMessage } from "react-intl";
import calculateTotalPrice from "../services/calculateTotalPrice";
function CheckoutMobileButton(props) {
  const {
    handleClick,
    itemList,
    buttonName,
    buttonType,
    handelPlaceOrder,
  } = props;
  const totalPrice = calculateTotalPrice(itemList);
  return (
    <div className="sm:hidden block">
      <div className="fixed inset-x-0 text-blue-700 bottom-0 flex justify-around items-center bg-white border-t border-blue-200 rounded-t-sm p-1 shadow-sm">
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
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
        <span className="text-md font-medium text-center">
          ${totalPrice.toFixed(2)}
        </span>
        {buttonType ? (
          <button
            onClick={handelPlaceOrder}
            className="w-4/6 border-blue-200  border-2 p-2 rounded-lg bg-blue-700 text-white"
          >
            <FormattedMessage id={buttonName} />
          </button>
        ) : (
          <button
            onClick={() => handleClick("next")}
            className="w-4/6 border-blue-200  border-2 p-2 rounded-lg bg-blue-700 text-white"
          >
            <FormattedMessage id={buttonName} />
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutMobileButton;
