/* eslint-disable react/prop-types */
import React from "react";
import EmptyPage from "./EmptyPage";
import orderHistory from "../services/orderHitory";
import { useCookies } from "react-cookie";
import Loading from "./Loading";
import { toast } from "react-toastify";
function OrderHistory() {
  const [cookies] = useCookies();
  const [load, setLoad] = React.useState(true);
  const [orders, setOrders] = React.useState([]);
  React.useEffect(() => {
    if (cookies.token !== "undefined") {
      const result = orderHistory(cookies);
      result
        .then(r => r.json())
        .then(res => {
          setOrders(res);
          setLoad(false);
        })
        .catch(e => {
          console.log(e);
          setLoad(false);
        });
    } else {
      toast("Please login to see your order");
      setOrders([]);
      setLoad(false);
    }
  }, [cookies]);
  if (load) {
    return <Loading />;
  }
  return (
    <main className="my-8">
      <div className="container max-w-4xl mx-auto px-6">
        <h3 className="text-gray-700 sm:text-2xl text-md font-medium capitalize">
          all orders
        </h3>
        {orders.length !== 0 ? (
          <div className="flex flex-col space-y-2">
            {orders &&
              orders.reverse().map((order, index) => (
                <div
                  key={index}
                  className="p-2 border-blue-200 border-2 rounded-md mt-6"
                >
                  <span className="my-2 capitalize font-bold text-md">
                    Ordered Date - {order.orderDate.slice(0, 10)}
                  </span>
                  <span className="flex flex-row flex-wrap text-md text-gray-600 space-x-2 mt-2">
                    <span className="text-md text-blue-900 font-bold">
                      Delivered at
                    </span>
                    <span>{order.shippingAddress.address}</span>
                    <span>{order.shippingAddress.city}</span>
                    <span>{order.shippingAddress.postalCode}</span>
                    <span>{order.shippingAddress.country}</span>
                  </span>
                  {order.orderItems.map((o, i) => (
                    <div
                      key={i}
                      className="flex sm:flex-row items-center sm:justify-start justify-center flex-wrap space-x-2 shadow-md rounded-md border-b-1 border-blue-400 mt-2 px-4 py-2"
                    >
                      <div
                        className="h-32 w-32 bg-contain bg-no-repeat"
                        style={{
                          backgroundImage: `url(${o.image})`,
                          backgroundPosition: "center",
                        }}
                      ></div>
                      <div className="flex flex-col space-y-2">
                        <span className="text-lg font-medium text-blue-900 capitalize">
                          {o.name}
                        </span>
                        <span className="text-sm font-medium text-gray-600 capitalize">
                          price ${o.netPrice}
                        </span>
                        <span className="text-sm font-medium text-gray-600 capitalize">
                          quantity - {o.quantity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        ) : (
          <EmptyPage title="your order History is empty" />
        )}
      </div>
    </main>
  );
}

export default OrderHistory;
