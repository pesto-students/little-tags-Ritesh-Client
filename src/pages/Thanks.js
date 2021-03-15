import React from "react";
import { Link } from "react-router-dom";
function Thanks() {
  return (
    <div className="flex flex-col space-y-5 justify-center items-center">
      <span className="text-2xl font-medium capitalize ">
        Thanks for ordering from shopkart
      </span>
      <div className="w-auto">
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-light py-4 px-6 rounded-full inline-block uppercase shadow-md"
        >
          Back To Homepage
        </Link>
      </div>
    </div>
  );
}

export default Thanks;
