import React from "react";
import Search from "./Search";
import ProfileDropdown from "./ProfileDropdown";
import CategoryDropdown from "./CategoryDropdown";
import { Link } from "react-router-dom";
function MobileMenu(props) {
  const { menuOpen, setShowModal, setShowSignupModal } = props;
  return (
    <div className="sm:hidden text-center">
      <div
        className={
          (menuOpen ? "block " : "hidden ") +
          "px-2 pt-2 pb-3 space-y-1 flex items-center flex-row justify-center"
        }
      >
        <CategoryDropdown menuOpen={menuOpen} />

        <Link
          to="/wishlist"
          className="text-black hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Wishlist
        </Link>
        <ProfileDropdown
          setShowModal={setShowModal}
          setShowSignupModal={setShowSignupModal}
          menuOpen={menuOpen}
        />
      </div>
      <div className="w-full p-4">
        <Search />
      </div>
    </div>
  );
}

export default MobileMenu;
