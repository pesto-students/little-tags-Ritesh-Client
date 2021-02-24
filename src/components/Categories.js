import React from "react";

function Categories() {
  return (
    <div className="p-12">
      <h3 className="text-black-600 text-2xl font-medium uppercase">
        Categories to bag
      </h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-6">
        <button className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
          <div
            className="flex items-end justify-end h-56 w-full bg-cover"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1446214814726-e6074845b4ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80')`,
            }}
          ></div>
          <div className="px-5 py-3 ">
            <h3 className="text-gray-700 uppercase">Men Clothing</h3>
          </div>
        </button>
        <button className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
          <div
            className="flex items-end justify-end h-56 w-full bg-cover"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1571908598047-9b0049221e4e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bGFkaWVzJTIwd2VkZGluZyUyMGluZGlhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80')`,
            }}
          ></div>
          <div className="px-5 py-3 ">
            <h3 className="text-gray-700 uppercase">Women Clothing</h3>
          </div>
        </button>
        <button className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
          <div
            className="flex items-end justify-end h-56 w-full bg-cover"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGpld2Vscnl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80')`,
            }}
          ></div>
          <div className="px-5 py-3 ">
            <h3 className="text-gray-700 uppercase">Jewelry</h3>
          </div>
        </button>
        <button className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
          <div
            className="flex items-end justify-end h-56 w-full bg-cover"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1598832517527-7e5b15ee1b2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGVsZWN0cm9uaWN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80')`,
            }}
          ></div>
          <div className="px-5 py-3 ">
            <h3 className="text-gray-700 uppercase">Electronic</h3>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Categories;
