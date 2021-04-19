import React from "react";
import { store } from "../redux/store";
import { FormattedMessage } from "react-intl";
import AddressModal from "../components/AddressModal";
import { useDispatch } from "react-redux";
import * as actions from "../redux/actionTypes";
import { toast } from "react-toastify";
function EditProfile() {
  const [showModal, setShowModal] = React.useState(false);
  const [userDetail, setUserDetail] = React.useState([]);
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const dispatch = useDispatch();
  React.useEffect(() => {
    const {
      userName,
      email,
      phoneNumber,
    } = store.getState().userReducer.userData;
    setUserDetail(store.getState().userReducer.userData);
    setUserName(userName);
    setEmail(email);
    setPhoneNumber(phoneNumber);
  }, [userDetail]);
  const handleRemoveAddress = id => {
    dispatch({ type: actions.REMOVE_ADDRESS, id: id });
    setUserDetail(store.getState().userReducer.userData);
  };
  const saveDetail = () => {
    // TODO: create api for adding address into user profile
    console.log(userDetail);
    toast("Profile Updated");
  };
  return (
    <main className="my-8">
      <div className="container max-w-4xl mx-auto px-6">
        <h3 className="text-gray-700 sm:text-2xl text-md font-medium capitalize">
          Account <br />
        </h3>
        <span>{userDetail.userName}</span>
        <div className="border-blue-200 rounded-md shadow-md">
          <div className="flex flex-col space-y-2 px-4 py-2 mt-4">
            <div className="p-2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={userName}
                  onChange={u => setUserName(u.target.value)}
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2">
              <div className="relative">
                <label
                  htmlFor="phoneNumber"
                  className="leading-7 text-sm text-gray-600"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={p => setPhoneNumber(p.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2">
              {userDetail.address !== undefined ? (
                userDetail.address.map((u, index) => (
                  <div key={index}>
                    {u.defaultAddress ? (
                      <div className="mt-2">
                        <span className="uppercase text-xs font-medium text-blue-700">
                          default address
                        </span>
                        <div className="shadow-md border-blue-200 border-2 flex flex-col space-y-2 justify-start p-4 rounded-md mt-2">
                          <div>
                            <input
                              type="checkbox"
                              checked={true}
                              value={true}
                            />
                            <span className="text-sm font-normal ml-2">
                              {u.name}
                            </span>

                            <div className="ml-5 flex flex-col space-y-2">
                              <span className="capitalize text-xs tracking-normal">
                                {u.address} {u.city} {u.postalcode} {u.country}
                              </span>
                              <span className="capitalize text-xs tracking-normal">
                                <span className="font-medium">Mobile - </span>
                                {u.phoneNumber}
                              </span>
                              <div className="flex flex-row space-x-2 justify-start text-sm font-normal">
                                <button
                                  onClick={() => handleRemoveAddress(u.id)}
                                  className="border-blue-200 rounded-md border-2 text-blue-700 p-2 hover:bg-blue-700 hover:text-white"
                                >
                                  remove
                                </button>
                                <button className="border-blue-200 rounded-md border-2 p-2 text-blue-700 hover:bg-blue-700 hover:text-white">
                                  edit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-2">
                        <span className="uppercase text-xs font-medium text-blue-700">
                          other address
                        </span>
                        <div className="border-blue-200 border-2 flex flex-col space-y-2 justify-start p-4 rounded-md mt-2">
                          <div>
                            <input type="checkbox" />
                            <span className="text-sm font-normal ml-2">
                              {u.name}
                            </span>

                            <div className="ml-5 flex flex-col space-y-2">
                              <span className="capitalize text-xs tracking-normal">
                                {u.address} {u.city} {u.postalcode} {u.country}
                              </span>
                              <span className="capitalize text-xs tracking-normal">
                                <span className="font-medium">Mobile - </span>
                                {u.phoneNumber}
                              </span>
                              <div className="flex flex-row space-x-2 justify-start text-sm font-normal">
                                <button
                                  onClick={() => handleRemoveAddress(u.id)}
                                  className="border-blue-200 rounded-md border-2 text-blue-700 p-2 hover:bg-blue-700 hover:text-white"
                                >
                                  remove
                                </button>
                                <button className="border-blue-200 rounded-md border-2 p-2 text-blue-700 hover:bg-blue-700 hover:text-white">
                                  edit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <span>No address found</span>
              )}
            </div>
            <div>
              <AddressModal showModal={showModal} setShowModal={setShowModal} />
              <button
                onClick={() => setShowModal(true)}
                className="uppercase sm:text-sm text-xs font-normal text-blue-700 border-blue-200  border-2 sm:p-2 p-1 rounded-lg hover:bg-blue-700 hover:text-white"
              >
                <FormattedMessage id="AddNewAddress" />
              </button>
            </div>
            <button
              onClick={saveDetail}
              className="uppercase sm:text-sm text-xs font-normal text-blue-700 border-blue-200  border-2 sm:p-2 p-1 rounded-lg hover:bg-blue-700 hover:text-white"
            >
              Save details
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default EditProfile;
