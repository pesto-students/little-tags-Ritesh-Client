import React from "react";
import Popper from "popper.js";
import ProfileDropDownMenu from "./ProfileDropDownMenu";
function ProfileDropdown(props) {
  const { setShowModal, menuOpen } = props;

  const [profileDropDown, setProfileDropDown] = React.useState(false);
  const profileBtnDropdownRef = React.createRef();
  const profileDropdownRef = React.createRef();
  const openProfileDropdown = () => {
    new Popper(profileBtnDropdownRef.current, profileDropdownRef.current, {
      placement: "auto",
    });
    setProfileDropDown(true);
  };
  const closeProfileDropdown = () => {
    setProfileDropDown(false);
  };
  if (menuOpen) {
    return (
      <>
        <span
          ref={profileBtnDropdownRef}
          onClick={() => {
            profileDropDown ? closeProfileDropdown() : openProfileDropdown();
          }}
          type="submit"
          className="text-black hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Profile
        </span>
        <ProfileDropDownMenu
          profileDropdownRef={profileDropdownRef}
          profileDropDown={profileDropDown}
          setShowModal={setShowModal}
          closeProfileDropdown={closeProfileDropdown}
          openProfileDropdown={openProfileDropdown}
        />
      </>
    );
  }
  return (
    <div
      onMouseEnter={() => {
        profileDropDown ? closeProfileDropdown() : openProfileDropdown();
      }}
      onMouseLeave={() => {
        if (profileDropDown) closeProfileDropdown();
      }}
      className="hidden sm:block"
    >
      <button
        ref={profileBtnDropdownRef}
        onClick={() => {
          profileDropDown ? closeProfileDropdown() : openProfileDropdown();
        }}
        type="submit"
        className=" p-1 rounded-md  px-4 py-2 text-black-700 fill-current hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          className="hidden sm:block"
          style={{
            display: "block",
            fill: "none",
            height: 24,
            width: 24,
            stroke: "currentcolor",
            strokeWidth: 5.33333,
            overflow: "visible",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </button>
      {/* profile drop down */}
      <ProfileDropDownMenu
        profileDropdownRef={profileDropdownRef}
        profileDropDown={profileDropDown}
        setShowModal={setShowModal}
        closeProfileDropdown={closeProfileDropdown}
        openProfileDropdown={openProfileDropdown}
      />
    </div>
  );
}

export default ProfileDropdown;
