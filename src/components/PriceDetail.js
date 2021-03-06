import React from "react";
import { FormattedMessage } from "react-intl";
import calculateTotalPrice from "../services/calculateTotalPrice";
function PriceDetail({ itemList }) {
  const totalPrice = calculateTotalPrice(itemList);
  return (
    <div className="py-2 border-b-2 rounded-b-lg  border-gray-200 px-2 shadow-inner">
      <span className="text-sm uppercase font-medium tracking-normal">
        <FormattedMessage id="PriceDetails" />
      </span>
      <div className="flex flex-row space-x-2 justify-between border-gray-200 border-b-2 py-2">
        <div className="w-11/12 flex flex-col justify-between text-xs font-normal tracking-normal">
          <span>
            <FormattedMessage id="TotalMRP" />
          </span>
          <span>
            <FormattedMessage id="DiscountOnMRP" />
          </span>
          <span>
            <FormattedMessage id="CouponDiscount" />
          </span>
        </div>
        <div className="w-1/4 flex flex-col justify-between text-xs font-normal tracking-tight">
          <span>${(totalPrice + (totalPrice * 35) / 100).toFixed(2)}</span>
          <span className="text-gray-500">
            -${((totalPrice * 35) / 100 - totalPrice).toFixed(2)}
          </span>
          <span>No</span>
        </div>
      </div>
      <div className="py-2 flex flex-col justify-between space-y-2">
        <div className="flex flex-row space-x-2 justify-between">
          <div className="w-11/12 flex flex-col justify-between text-xs font-normal tracking-tight">
            <span className="font-medium">Total</span>
          </div>
          <div className="w-1/4 flex flex-col justify-between text-xs font-normal tracking-tight">
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceDetail;
