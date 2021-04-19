/* eslint-disable react/prop-types */
import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { store } from "../redux/store";
import * as actions from "../redux/actionTypes";
import { useDispatch } from "react-redux";
// import firebase from "firebase/app";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import Loading from "../pages/Loading";
function ProfileDropDownMenu(props) {
  const dispatch = useDispatch();
  const [cookies, removeCookie] = useCookies(["token"]);
  const [load, setLoad] = React.useState(false);
  const username = store.getState().userReducer.userData
    ? store.getState().userReducer.userData.userName
    : undefined;
  React.useEffect(() => {
    console.log(cookies);
  }, [cookies]);
  const {
    profileDropdownRef,
    profileDropDown,
    setShowModal,
    closeProfileDropdown,
    openProfileDropdown,
    setShowSignupModal,
  } = props;
  const profile = [
    // { id: 1, catName: "orderHistory" },
    // { id: 2, catName: "trackOrder" },
    { id: 3, catName: "contactUs" },
  ];
  const signOutUser = () => {
    setLoad(true);
    removeCookie("token");
    dispatch({ type: actions.SET_USER, data: "" });
    toast(`User logged out`);
    closeProfileDropdown();
    setLoad(false);
  };
  if (load) {
    return <Loading />;
  }
  return (
    <div
      ref={profileDropdownRef}
      className={
        (profileDropDown ? "block " : "hidden ") +
        "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg"
      }
      // style={{ minWidth: "12rem" }}
    >
      <span
        className={
          "text-gray-800 text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent"
        }
      >
        <span>Welcome , {username}</span> <br />
        <p className="font-light">
          <FormattedMessage id="profileGreet" />
          <br />
          <FormattedMessage id="manageOrder" />
        </p>
      </span>
      {username === "" || username === undefined ? (
        <div className="pr-2 pl-2 flex flex-row space-x-4 items-center">
          <button
            className="text-white block mt-2 lg:inline-block lg:mt-2 px-4 py-2 rounded  mr-2 transition duration-500 ease-in-out bg-blue-700 hover:bg-orange-700 transform hover:-translate-y-1 hover:scale-110"
            onClick={() => {
              setShowModal(true);
              profileDropDown ? closeProfileDropdown() : openProfileDropdown();
            }}
          >
            <FormattedMessage id="login" />
          </button>
          <button
            onClick={() => {
              setShowSignupModal(true);
              profileDropDown ? closeProfileDropdown() : openProfileDropdown();
            }}
            className="text-white block mt-2 lg:inline-block lg:mt-2 px-4 py-2 rounded  mr-2 transition duration-500 ease-in-out bg-blue-700 hover:bg-orange-700 transform hover:-translate-y-1 hover:scale-110"
          >
            <FormattedMessage id="signUp" />
          </button>
        </div>
      ) : undefined}
      <div className="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25" />
      {profile &&
        profile.map((p, index) => (
          <Link
            key={index}
            to={`/${p.catName}`}
            className={
              "text-gray-800 text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:bg-blue-700 hover:text-white"
            }
          >
            <FormattedMessage id={p.catName} />
          </Link>
        ))}
      {username !== "" && username !== undefined ? (
        <div>
          <Link
            to="/orderHistory"
            className={
              "text-gray-800 text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:bg-blue-700 hover:text-white"
            }
          >
            <FormattedMessage id="orderHistory" />
          </Link>
          <Link
            to="/editProfile"
            className={
              "text-gray-800 text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:bg-blue-700 hover:text-white"
            }
          >
            <FormattedMessage id="editProfile" />
          </Link>
          <button
            onClick={signOutUser}
            className={
              "text-gray-800 text-left text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:bg-blue-700 hover:text-white"
            }
          >
            Sign Out
          </button>
        </div>
      ) : undefined}
    </div>
  );
}

export default ProfileDropDownMenu;
