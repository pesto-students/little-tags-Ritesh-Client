/* eslint-disable react/prop-types */
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { withRouter } from "react-router";
import Loading from "./Loading";
import { addToWishList, addToCart } from "../redux/actions";
import { wishlistStore, cartListStore } from "../redux/store";
import { FormattedMessage } from "react-intl";
function ProductDetail(props) {
  const history = useHistory();
  const { data } = props.location;
  const [wishlistButton, setWishListButtonName] = React.useState("");
  const [addToCartButton, setAddToCartButtonName] = React.useState("");
  const [sizeOfItem, setSizeOfItem] = React.useState("sm");
  const [quantityOfItem, setQuantityOfItem] = React.useState(1);
  const [item, setItem] = React.useState();
  const [load, setLoad] = React.useState(true);
  const [title, setTitle] = React.useState("");
  React.useEffect(() => {
    setLoad(true);
    setAddToCartButtonName("add to cart");
    setWishListButtonName("wishlist");
    setTimeout(() => {
      if (!data) {
        setLoad(false);
        props.history.goBack();
      } else {
        setItem(data.item);
        setLoad(false);
        setTitle(data.item.category);
      }
    }, 1.5 * 1000);
  }, [data, props.history]);
  const addToWishlist = data => {
    wishlistStore.dispatch(addToWishList(data));
    setWishListButtonName("wishlisted");
  };

  const addToCartList = data => {
    data.size = sizeOfItem;
    data.quantity = quantityOfItem;
    if (addToCartButton === "go to bag") {
      history.push({
        pathname: "/checkout",
      });
    } else {
      cartListStore.dispatch(addToCart(data));
      setAddToCartButtonName("go to bag");
    }
    setQuantityOfItem(1);
  };

  if (load) {
    return <Loading />;
  }
  let titleName;
  switch (item.category) {
    case "men clothing":
      titleName = "menClothing";
      break;
    case "women clothing":
      titleName = "womenClothing";
      break;
    default:
      titleName = title;
  }
  return (
    <div className="text-gray-700 body-font bg-white">
      <div className="px-5 py-5 lg:w-4/5 mx-auto ">
        <div className="px-4 py-4 flex items-start sm:pl-24">
          <span className="text-lg capitalize font-normal text-gray-400">
            <Link to="/" className="mx-1">{`Home /`}</Link>
            <Link 
              to={{
                pathname: "/productList",
                search: `${item.category}`,
                title: `${item.category}`,
              }} 
              className="mx-1">
              <FormattedMessage id={titleName} /> /
            </Link>
            <span className="text-gray-800">{item.title}</span>
          </span>
        </div>
        <div className="flex sm:flex-row flex-col justify-center items-start mt-4">
          <div className="w-full sm:w-4/12 flex flex-col space-y-2">
            <div className="">
              <img
                src={item.image}
                alt="..."
                className="rounded max-w-full h-auto absolute-center border-none"
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10">
            <h1 className="text-gray-900 sm:text-3xl text-xl title-font font-medium mb-1">
              {item.title}
            </h1>
            <span className="title-font font-medium sm:text-2xl text-lg text-gray-900">
              ${item.price}
            </span>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">{item.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              {title.includes("clothing") ? (
                <div className="flex items-center mr-4">
                  <span className="mr-3">
                    <FormattedMessage id="Size" />
                  </span>
                  <div className="relative">
                    <select
                      onChange={s => {
                        setSizeOfItem(s.target.value);
                      }}
                      className="rounded border appearance-none border-blue-200 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10"
                    >
                      <option value="sm">SM</option>
                      <option value="m">M</option>
                      <option value="L">L</option>
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
                    placeholder={quantityOfItem}
                    onChange={q => {
                      setQuantityOfItem(q.target.value);
                    }}
                    type="number"
                    min="1"
                    max="30"
                    step="1"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center  sm:text-lg text-sm">
              <button
                onClick={() => addToCartList(item)}
                className="flex items-center sm:mr-4 mr-2 text-white bg-blue-700 hover:bg-blue-600 border-2 rounded-md py-2 px-6 "
              >
                {addToCartButton === "add to cart" ? (
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
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                <span className="pl-2 py-2 capitalize">{addToCartButton}</span>
              </button>
              <button
                disabled={wishlistButton === "wishlisted"}
                onClick={() => addToWishlist(item)}
                className={
                  (wishlistButton === "wishlisted"
                    ? "bg-blue-200 text-white "
                    : "") +
                  "flex capitalize items-center text-gray-800 border-2 py-2 px-6 rounded-lg hover:border-blue-200"
                }
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

                <span className="pl-2 py-2">{wishlistButton}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(ProductDetail);
