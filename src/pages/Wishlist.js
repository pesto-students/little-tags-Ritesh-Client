/* eslint-disable react/prop-types */
import React from "react";
import * as actions from "../redux/actionTypes";
import { store } from "../redux/store";
import { addToCart } from "../redux/actions";
import EmptyPage from "./EmptyPage";
function Wishlist() {
  const [itemInWishlist, setItemList] = React.useState([]);
  React.useEffect(() => {
    setItemList(store.getState().wishlistReducer.items);
  }, [itemInWishlist]);

  const handleRemoveFromWishlist = id => {
    store.dispatch({ type: actions.REMOVE_FROM_WISHLIST, payload: id });
    const remainingArray = itemInWishlist.filter(item => item.id !== id);
    setItemList(remainingArray);
  };

  const handleMoveToCart = data => {
    store.dispatch(addToCart(data));
    handleRemoveFromWishlist(data.id);
  };
  return (
    <main className="my-8">
      <div className="container mx-auto px-6">
        <h3 className="text-gray-700 sm:text-2xl text-md font-medium capitalize">
          My wishlist {itemInWishlist.length}
        </h3>
        {itemInWishlist.length !== 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {itemInWishlist.map((item, index) => (
              <div
                key={index}
                className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                <div className="flex items-end justify-end mt-2">
                  <button
                    onClick={() => handleRemoveFromWishlist(item.id)}
                    className="
                    transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 p-2 rounded-full mx-5 -mb-4  focus:outline-none
                    flex-none flex items-center justify-center w-6 h-6 text-gray-400 border border-blue-500 hover:animate-ping"
                    type="button"
                  >
                    <span className="text-xl text-gray-700">X</span>
                  </button>
                </div>
                <div
                  className="flex items-end justify-end h-56 w-full bg-contain bg-no-repeat"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundPosition: "center",
                  }}
                ></div>
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
                <button
                  onClick={() => handleMoveToCart(item)}
                  className="w-full flex uppercase items-center justify-center text-gray-800 border-2 py-2 px-6 rounded-lg hover:border-blue-200"
                >
                  <span className="pl-2 py-2 text-center">Move to bag</span>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <EmptyPage title="YOUR WISHLIST IS EMPTY" />
        )}
      </div>
    </main>
  );
}

export default Wishlist;
