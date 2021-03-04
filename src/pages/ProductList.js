import React from "react";

function ProductList() {
  const products = [
    {
      id: 1,
      pName: "Old watch",
      pImg:
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80",
      price: 1850,
    },
    {
      id: 2,
      pName: "Classic watch",
      pImg:
        "https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      price: 1260,
    },
    {
      id: 3,
      pName: "Old watch",
      pImg:
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80",
      price: 1260,
    },
    {
      id: 4,
      pName: "Classic watch",
      pImg:
        "https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      price: 1260,
    },
  ];

  return (
    <main className="my-8">
      <div className="container mx-auto px-6">
        <h3 className="text-gray-700 text-2xl font-medium">Product List</h3>
        <span className="mt-3 text-sm text-gray-500">200+ Products</span>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {products &&
            products.map((product, index) => (
              <div
                key={index}
                className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
              >
                <div
                  className="flex items-end justify-end h-56 w-full bg-cover"
                  style={{
                    backgroundImage: `url(${product.pImg})`,
                  }}
                >
                  <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </button>
                </div>
                <div className="px-5 py-3">
                  <h3 className="text-gray-700 uppercase">{product.pName}</h3>
                  <span className="text-gray-500 mt-2">{product.price}</span>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center">
          <div className="flex rounded-md mt-8">
            <a
              href="#"
              className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white"
            >
              <span>Previous</span>
            </a>
            <a
              href="#"
              className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
            >
              <span>1</span>
            </a>
            <a
              href="#"
              className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
            >
              <span>2</span>
            </a>
            <a
              href="#"
              className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
            >
              <span>3</span>
            </a>
            <a
              href="#"
              className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white"
            >
              <span>Next</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductList;
