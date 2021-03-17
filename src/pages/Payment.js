/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import PriceDetail from "../components/PriceDetail";
import { FormattedMessage } from "react-intl";
import CheckoutMobileButton from "../components/CheckoutMobileButton";
function Payment(props) {
  const { handleClick, itemList } = props;
  return (
    <div className="flex sm:flex-row flex-col mt-12">
      <div className="sm:w-3/4 shadow-md rounded-b-md mr-2  p-4">
        <span className="sm:text-lg text-sm capitalize font-medium">
          <FormattedMessage id="ChoosePaymentMode" />
        </span>
        <div className="mt-2">
          <span className="uppercase text-xs font-medium text-blue-700">
            <FormattedMessage id="PaymentOptions" />
          </span>
          <div className="shadow-md border-blue-200 border-2 flex sm:flex-row flex-col space-y-2 space-x-2 p-4 rounded-md mt-2">
            <div className=" sm:w-1/2 flex space-y-2 flex-col">
              <button className="p-2 hover:bg-blue-700 border-2 border-blue-200 rounded-lg capitalize hover:text-white">
                <FormattedMessage id="CashOnDelivery" />
              </button>
              <span className="text-sm font-normal text-center tracking-wide">
                <FormattedMessage id="POD" />
              </span>

              <button className="p-2 hover:bg-blue-700 border-2 border-blue-200 rounded-lg capitalize hover:text-white">
                Razor Pay
              </button>
              <button className="p-2 hover:bg-blue-700 border-2 border-blue-200 rounded-lg capitalize hover:text-white">
                Visa / master Card
              </button>
              <button className="p-2 hover:bg-blue-700 border-2 border-blue-200 rounded-lg capitalize hover:text-white">
                Paypal
              </button>
            </div>
            <div className="w-full sm:px-4">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                <FormattedMessage id="Remarks" />
              </label>
              <FormattedMessage id="AnyMessage">
                {placeholder => (
                  <textarea
                    placeholder={placeholder}
                    className="w-4/6 mx-1 text-gray-700 border-b border-blue-200 focus:outline-none focus:ring focus:border-blue-300"
                  />
                )}
              </FormattedMessage>
              <div className="sm:hidden block">
                <div className="flex flex-col space-y-2 justify-center items-center">
                  <Link
                    to="/thanks"
                    className="w-full text-center text-blue-700 border-blue-200  border-2 p-2 rounded-lg hover:bg-blue-700 hover:text-white"
                  >
                    <FormattedMessage id="PlaceOrder" />
                  </Link>
                  <button
                    onClick={() => handleClick()}
                    className="w-full text-blue-700 border-blue-200  border-2 p-2 rounded-lg hover:bg-blue-700 hover:text-white"
                  >
                    <FormattedMessage id="GoBack" />
                  </button>
                </div>
              </div>
              <div className="sm:block hidden">
                <div className="flex flex-row justify-start mt-4 space-x-4">
                  <button
                    onClick={() => handleClick()}
                    className="text-blue-700 border-blue-200  border-2 p-2 rounded-lg hover:bg-blue-700 hover:text-white"
                  >
                    <FormattedMessage id="GoBack" />
                  </button>
                  <Link
                    to="/thanks"
                    className="text-blue-700 border-blue-200  border-2 p-2 rounded-lg hover:bg-blue-700 hover:text-white"
                  >
                    <FormattedMessage id="PlaceOrder" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:w-1/4 flex flex-col space-y-2 shadow-md rounded-b-md ">
        <div className="py-2 border-b-2 rounded-b-lg  border-gray-200 px-2 shadow-inner flex flex-col justify-start">
          <span className="text-sm uppercase font-medium tracking-normal">
            <FormattedMessage id="DeliveryEstimates" />
          </span>
          <div className="py-2">
            <span className="capitalize text-xs font-normal">
              <FormattedMessage id="EstimateDelivery" />
              <span className="text-xs ml-2 font-medium">
                {Date(new Date().getTime() + 24 * 60 * 60 * 1000).slice(0, 16)}
              </span>
            </span>
          </div>
        </div>
        {/* <PriceDetail handleClick={handleClick} /> */}
        <PriceDetail itemList={itemList} />
      </div>
      <CheckoutMobileButton
        handleClick={handleClick}
        itemList={itemList}
        buttonName={"PlaceOrder"}
        buttonType="Link"
      />
    </div>
  );
}

export default Payment;
