import React from "react";
import PriceDetail from "../components/PriceDetail";
import AddressModal from "../components/AddressModal";
import { FormattedMessage } from "react-intl";
function Address(props) {
  const { handleClick, itemList } = props;
  const [showModal, setShowModal] = React.useState(false);
  const [totalPrice, setTotalPrice] = React.useState(0);
  React.useEffect(() => {
    let tp = 0;
    tp = itemList.map(item => tp + item.price * item.quantity);
    console.log(tp[0]);
    setTotalPrice(tp[0]);
  }, [itemList]);
  return (
    <div className="flex sm:flex-row flex-col mt-12">
      <div className="sm:w-3/4 shadow-md rounded-b-md mr-2  p-4">
        <AddressModal showModal={showModal} setShowModal={setShowModal} />
        <div className="flex space-x-2 justify-between items-center">
          <span className="sm:text-lg text-sm capitalize font-medium">
            <FormattedMessage id="SelectDeliveryLocation" />
          </span>
          <button
            onClick={() => setShowModal(true)}
            className="uppercase sm:text-sm text-xs font-normal text-blue-700 border-blue-200  border-2 sm:p-2 p-1 rounded-lg hover:bg-blue-700 hover:text-white"
          >
            <FormattedMessage id="AddNewAddress" />
          </button>
        </div>
        <div className="mt-2">
          <span className="uppercase text-xs font-medium text-blue-700">
            <FormattedMessage id="DefaultAddress" />
          </span>
          <div className="shadow-md border-blue-200 border-2 flex flex-col space-y-2 justify-start p-4 rounded-md mt-2">
            <div>
              <input type="checkbox" checked={true} />
              <span className="text-sm font-normal ml-2">Ritesh Sinha</span>

              <div className="ml-5 flex flex-col space-y-2">
                <span className="capitalize text-xs tracking-normal">
                  Shanti vihar colony dangania raipur cg india
                </span>
                <span className="capitalize text-xs tracking-normal">
                  <span className="font-medium">Mobile - </span>877091912
                </span>
                <div className="flex flex-row space-x-2 justify-start text-sm font-normal">
                  <button className="border-blue-200 rounded-md border-2 text-blue-700 p-2 hover:bg-blue-700 hover:text-white">
                    <FormattedMessage id="Remove" />
                  </button>
                  <button className="border-blue-200 rounded-md border-2 p-2 text-blue-700 hover:bg-blue-700 hover:text-white">
                    <FormattedMessage id="Edit" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <span className="uppercase text-xs font-medium text-blue-700">
            <FormattedMessage id="OtherAddress" />
          </span>
          <div className="border-blue-200 border-2 flex flex-col space-y-2 justify-start p-4 rounded-md mt-2">
            <div>
              <input type="checkbox" />
              <span className="text-sm font-normal ml-2">Ritesh Sinha</span>

              <div className="ml-5 flex flex-col space-y-2">
                <span className="capitalize text-xs tracking-normal">
                  Shanti vihar colony dangania raipur cg india
                </span>
                <span className="capitalize text-xs tracking-normal">
                  <span className="font-medium">Mobile - </span>877091912
                </span>
              </div>
            </div>
          </div>
          <div className="border-blue-200 border-2 flex flex-col space-y-2 justify-start p-4 rounded-md mt-2">
            <div>
              <input type="checkbox" />
              <span className="text-sm font-normal ml-2">Manmeet Parmar</span>

              <div className="ml-5 flex flex-col space-y-2">
                <span className="capitalize text-xs tracking-normal">
                  Bangla No 46 C.R.P.F Road, Neemuch, India
                </span>
                <span className="capitalize text-xs tracking-normal">
                  <span className="font-medium">Mobile - </span>8871576137
                </span>
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
        <PriceDetail itemList={itemList} />
        <button
          onClick={() => handleClick("next")}
          className="text-blue-700 border-blue-200  border-2 p-2 rounded-lg hover:bg-blue-700 hover:text-white"
        >
          <FormattedMessage id="Continue" />
        </button>
        <button
          onClick={() => handleClick()}
          className="text-blue-700 border-blue-200  border-2 p-2 rounded-lg hover:bg-blue-700 hover:text-white"
        >
          <FormattedMessage id="GoBack" />
        </button>
      </div>
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
          <button
            onClick={() => handleClick("next")}
            className="w-4/6 border-blue-200  border-2 p-2 rounded-lg bg-blue-700 text-white"
          >
            <FormattedMessage id="Continue" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Address;
