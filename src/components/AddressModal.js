import React from "react";
import { FormattedMessage } from "react-intl";
function AddressModal({ showModal, setShowModal }) {
  return (
    <div>
      {showModal ? (
        <>
          <div className="h-1/4 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-lg text-center font-semibold">
                    <FormattedMessage id="AddNewAddress" />
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className=" flex flex-col justify-center items-start relative p-5 pb-6">
                  <div className="mb-6">
                    <label
                      for="name"
                      class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <FormattedMessage id="FullName" />
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="John Doe"
                      required
                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="name"
                      class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <FormattedMessage id="MobileNumber" />
                    </label>
                    <input
                      type="number"
                      name="name"
                      id="name"
                      placeholder="8770919212"
                      required
                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="name"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <FormattedMessage id="Address" />
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Raipur CG India"
                      required
                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="name"
                      class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <FormattedMessage id="ZipCode" />
                    </label>
                    <input
                      type="number"
                      name="name"
                      id="name"
                      placeholder="491332"
                      required
                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div class="mb-6 flex flex-row items-center space-x-2">
                    <input type="checkbox" />
                    <label
                      for="name"
                      class="ml-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <FormattedMessage id="MakeItDefault" />
                    </label>
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="w-full text-blue-700 border-blue-200  border-2 p-2 rounded-lg hover:bg-blue-700 hover:text-white"
                  >
                    <FormattedMessage id="Add" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default AddressModal;
