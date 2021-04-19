/* eslint-disable react/prop-types */
import React from "react";
import { useHistory } from "react-router-dom";
import { store } from "../redux/store";
import PriceDetail from "../components/PriceDetail";
import { FormattedMessage } from "react-intl";
import CheckoutMobileButton from "../components/CheckoutMobileButton";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import makeOrder from "../services/makeOrder";
import { RAZORPAY_KEY_ID, SHOPKART_BACKEND_URI } from "../config/default";
import calculateTotalPrice from "../services/calculateTotalPrice";
import { removeAllFromCart } from "../redux/actions";
import Loading from "./Loading";

// load
function loadScript(src) {
  return new Promise(resolve => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

function Payment(props) {
  const [cookies] = useCookies();
  const { userData } = store.getState().userReducer;
  const { handleClick, itemList } = props;
  const [method, setMethod] = React.useState("cash on delivery");
  const history = useHistory();
  const [load, setLoad] = React.useState(false);
  const handelPlaceOrder = () => {
    const items = itemList.map(item => ({
      name: item.title,
      quantity: item.quantity,
      image: item.image,
      netPrice: item.price,
      productId: item._id,
    }));
    // TODO: we have to pick default address, right now picking oth indexed data
    const userAddress = store.getState().userReducer.userData.address[0];
    const address = {
      address: userAddress.address,
      city: userAddress.city,
      postalCode: userAddress.postalcode,
      country: userAddress.country,
    };
    const order = {
      orderItems: items,
      shippingAddress: address,
      paymentMethod: method,
      shippingPrice: "70",
    };
    placeOrder(order);
  };
  const placeOrder = async data => {
    setLoad(true);
    console.log(data);
    const result = makeOrder(data, cookies);
    result
      .then(r => r.json())
      .then(() => {
        toast(`Order successfully placed`);
        store.dispatch(removeAllFromCart([]));
        setLoad(true);
        history.push({
          pathname: "/thanks",
        });
      })
      .catch(e => {
        toast(`${e.message}`);
        setLoad(false);
      });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const totalPrice = calculateTotalPrice(itemList) + 70;
    const data = await fetch(SHOPKART_BACKEND_URI + "razorpay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ totalPrice }),
    }).then(t => t.json());
    const options = {
      key: RAZORPAY_KEY_ID,
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Shopkart",
      image: "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",
      handler: function (response) {
        // later will update wrt response
        if (response) {
          toast(`Payment successfully done`);
          setMethod("razorpay");
        } else {
          setMethod("cash on delivery");
        }
      },
      prefill: {
        name: userData.userName,
        email: userData.email,
        contact: userData.phoneNumber,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  if (load) {
    return <Loading />;
  }
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
              <label className="">
                <input
                  type="radio"
                  checked={method === "cash on delivery"}
                  onChange={c => setMethod("cash on delivery")}
                  className="p-2 mr-2 capitalize hover:bg-blue-700 border-2 border-blue-200 rounded-lg capitalize hover:text-white"
                />
                cash on delivery
              </label>
              <label className="">
                <input
                  type="radio"
                  checked={method === "razorpay"}
                  // onChange={c => setMethod("razorpay")}
                  onClick={displayRazorpay}
                  className="p-2 mr-2 capitalize hover:bg-blue-700 border-2 border-blue-200 rounded-lg capitalize hover:text-white"
                />
                razorpay
              </label>
              <label className="">
                <input
                  type="radio"
                  checked={method === "paypal"}
                  onChange={c => setMethod("paypal")}
                  className="p-2 mr-2 capitalize hover:bg-blue-700 border-2 border-blue-200 rounded-lg capitalize hover:text-white"
                />
                paypal
              </label>
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
                  <button
                    onClick={handelPlaceOrder}
                    className="w-full text-center text-blue-700 border-blue-200  border-2 p-2 rounded-lg hover:bg-blue-700 hover:text-white"
                  >
                    <FormattedMessage id="PlaceOrder" />
                  </button>
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
                  <button
                    onClick={handelPlaceOrder}
                    className="text-blue-700 border-blue-200  border-2 p-2 rounded-lg hover:bg-blue-700 hover:text-white"
                  >
                    <FormattedMessage id="PlaceOrder" />
                  </button>
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
        handelPlaceOrder={handelPlaceOrder}
      />
    </div>
  );
}

export default Payment;
