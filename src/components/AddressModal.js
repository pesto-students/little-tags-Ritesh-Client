import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { store } from "../redux/store";
import { addAddress } from "../redux/actions";
function AddressModal({ showModal, setShowModal }) {
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [postalcode, setPostalcode] = useState();
  const [country, setCountry] = useState();
  const [defaultAddress, setDefaultAddress] = useState(false);
  const addNewAddress = e => {
    e.preventDefault();
    const userAddress = {
      id: Math.random().toString(16).replace("0", "addressID"),
      name,
      phoneNumber,
      address,
      city,
      postalcode,
      country,
      defaultAddress,
    };
    store.dispatch(addAddress(userAddress));
    setShowModal(false);
  };
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
                <form
                  method="post"
                  action="#"
                  onSubmit={e => addNewAddress(e)}
                  className=" flex flex-col justify-center items-start relative p-5 pb-6"
                >
                  <div className="flex sm:flex-row space-x-2 justify-between">
                    <div className="mb-6">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                        <FormattedMessage id="FullName" />
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={n => setName(n.target.value)}
                        placeholder="John Doe"
                        required
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                        <FormattedMessage id="MobileNumber" />
                      </label>
                      <input
                        type="tel"
                        name="number"
                        value={phoneNumber}
                        onChange={p => setPhoneNumber(p.target.value)}
                        placeholder="8770919212"
                        required
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-row space-x-2 justify-between">
                    <div className="mb-6">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                        <FormattedMessage id="Address" />
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={address}
                        onChange={a => setAddress(a.target.value)}
                        placeholder="Raipur CG India"
                        required
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        value={city}
                        onChange={c => setCity(c.target.value)}
                        placeholder="Raipur"
                        required
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-row space-x-2 justify-between">
                    <div className="mb-6">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                        <FormattedMessage id="ZipCode" />
                      </label>
                      <input
                        type="number"
                        name="postcode"
                        value={postalcode}
                        onChange={p => setPostalcode(p.target.value)}
                        placeholder="491332"
                        required
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        id="country"
                        value={country}
                        onChange={c => setCountry(c.target.value)}
                        placeholder="India"
                        required
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      />
                    </div>
                  </div>
                  <div className="mb-6 flex flex-row items-center space-x-2">
                    <input
                      type="checkbox"
                      value={defaultAddress}
                      onChange={() => setDefaultAddress(!defaultAddress)}
                    />
                    <label className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      <FormattedMessage id="MakeItDefault" />
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-blue-700 border-blue-200  border-2 p-2 rounded-lg hover:bg-blue-700 hover:text-white"
                  >
                    <FormattedMessage id="Add" />
                  </button>
                </form>
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
