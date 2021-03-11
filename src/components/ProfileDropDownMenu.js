import React from "react";
import { FormattedMessage } from "react-intl";
function ProfileDropDownMenu(props) {
  const {
    profileDropdownRef,
    profileDropDown,
    setShowModal,
    closeProfileDropdown,
    openProfileDropdown,
  } = props;
  const profile = [
    { id: 1, catName: "orderHistory" },
    { id: 2, catName: "trackOrder" },
    { id: 3, catName: "contactUs" },
    { id: 4, catName: "editProfile" },
  ];
  return (
    <div
      ref={profileDropdownRef}
      className={
        (profileDropDown ? "block " : "hidden ") +
        "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg"
      }
      style={{ minWidth: "12rem" }}
    >
      <span
        className={
          "text-gray-800 text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent"
        }
      >
        <span>Welcome</span> <br />
        <p className="font-light">
          <FormattedMessage id="profileGreet" />
          <br />
          <FormattedMessage id="manageOrder" />
        </p>
      </span>
      <div className="pr-2 pl-2 flex flex-row justify-between items-center">
        <a
          href="#login"
          className="text-white block mt-2 lg:inline-block lg:mt-2 px-4 py-2 rounded  mr-2 transition duration-500 ease-in-out bg-blue-700 hover:bg-orange-700 transform hover:-translate-y-1 hover:scale-110"
          onClick={() => {
            setShowModal(true);
            profileDropDown ? closeProfileDropdown() : openProfileDropdown();
          }}
        >
          <FormattedMessage id="login" />
        </a>
        <a
          href="#signup"
          className="text-white block mt-2 lg:inline-block lg:mt-2 px-4 py-2 rounded  mr-2 transition duration-500 ease-in-out bg-blue-700 hover:bg-orange-700 transform hover:-translate-y-1 hover:scale-110"
        >
          <FormattedMessage id="signUp" />
        </a>
      </div>
      <div className="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25" />
      {profile &&
        profile.map((p, index) => (
          <a
            key={index}
            href={`/${p.catName}`}
            className={
              "text-gray-800 text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:bg-blue-700 hover:text-white"
            }
          >
            <FormattedMessage id={p.catName} />
          </a>
        ))}
    </div>
  );
}

export default ProfileDropDownMenu;
