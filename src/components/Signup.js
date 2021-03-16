/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import * as actions from "../redux/actionTypes";
import { useDispatch } from "react-redux";
import firebase from "firebase/app";
import Loading from "../pages/Loading";
function Signup({ showModal, setShowModal }) {
  const [displayName, setdisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const createAccount = async () => {
    setLoad(true);
    console.log(displayName, email, password);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(
        function (user) {
          user.user
            .updateProfile({
              displayName: displayName,
            })
            .then(
              function () {
                dispatch({
                  type: actions.SET_USER,
                  data: displayName,
                });
                setShowModal(false);
                setLoad(false);
              },
              function (error) {
                console.log(error);
                setShowModal(false);
                setLoad(false);
              }
            );
        },
        function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === "auth/weak-password") {
            alert("The password is too weak.");
            setLoad(false);
          } else {
            console.error(error);
            setShowModal(false);
            setLoad(false);
          }
        }
      );
  };
  if (load) return <Loading />;
  return (
    <div>
      {showModal ? (
        <>
          <div className="h-1/4 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-lg text-center capitalize font-semibold">
                    create a new account
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
                      htmlFor="name"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <FormattedMessage id="FullName" />
                    </label>
                    <input
                      type="text"
                      onChange={u => setdisplayName(u.target.value)}
                      name="name"
                      id="name"
                      value={displayName}
                      placeholder="John Doe"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      name="name"
                      onChange={e => setEmail(e.target.value)}
                      id="email"
                      value={email}
                      placeholder="info@shopkart.com"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={p => setPassword(p.target.value)}
                      id="password"
                      placeholder="******"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <button
                    onClick={() => {
                      createAccount();
                      setShowModal(false);
                    }}
                    className="w-full text-blue-700 border-blue-200  border-2 p-2 rounded-lg hover:bg-blue-700 hover:text-white"
                  >
                    Create
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

export default Signup;
