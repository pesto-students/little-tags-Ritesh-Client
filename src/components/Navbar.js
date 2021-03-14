import React from "react";
import { FormattedMessage } from "react-intl";
import LangDropdown from "./LangDropdown";
import ProfileDropdown from "./ProfileDropdown";
import CategoryDropdown from "./CategoryDropdown";
import MobileMenu from "./MobileMenu";
import Search from "./Search";
import { Link } from "react-router-dom";
function Navbar(props) {
  const { setShowModal, changeLanguage } = props;
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white-800">
      <div className="sm:pl-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 border-solid border-b-2 border-gray-100 lg:pb-0">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={(menuOpen ? "hidden " : "block ") + "h-6 w-6"}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={(menuOpen ? "block " : "hidden ") + "h-6 w-6"}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <Link
              to="/"
              className="flex-shrink-0 flex items-center cursor-pointer"
            >
              <img
                className="block h-8 w-auto mr-2"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              <div className="hidden lg:block h-8 w-auto flex-shrink-0 text-gray-800 mr-16">
                <span className="text-3xl max-w-xl text-blue-900 leading-tight">
                  <FormattedMessage id="title" />
                </span>
              </div>
            </Link>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <CategoryDropdown />
                <Link
                  to="/wishlist"
                  className="text-black hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <FormattedMessage id="wishlist" />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/3 hidden sm:block">
            <Search />
          </div>
          <div className="absolute inset-y-0 right-0 flex sm:space-x-3 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <ProfileDropdown setShowModal={setShowModal} />
            <Link
              to="/checkout"
              className=" p-1 rounded-md  px-4 py-2 text-black-700 fill-current hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">cart</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </Link>
            <LangDropdown changeLanguage={changeLanguage} />
          </div>
        </div>
      </div>
      <MobileMenu menuOpen={menuOpen} setShowModal={setShowModal} />
    </nav>
  );
}

export default Navbar;
