import React from "react";
import { Link } from "react-router-dom";
function EmptyPage() {
  return (
    <div className="container mx-auto px-4">
      <section className="px-4 text-center">
        <div className="max-w-auto mx-auto flex flex-col space-y-2">
          <div className="md:max-w-lg mx-auto">
            <img
              alt="..."
              className="w-64 mx-auto"
              src="https://github.com/mdjamal/tailwindcss-rails-custom-error-page-templates/blob/master/static-illustrated/flamenco-no-comments.png?raw=true"
            />
          </div>
          <h2 className="uppercase text-3xl lg:text-5xl font-black">
            Your cart is empty
          </h2>

          <span className="uppercase text-2xl text-gray-900">
            Its an add to cart kinda day !
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
      </section>
    </div>
  );
}

export default EmptyPage;
