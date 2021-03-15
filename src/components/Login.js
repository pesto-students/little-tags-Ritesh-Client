/* eslint-disable react/prop-types */
import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { googleProvider } from "../config/auth";
import socialMediaAuth from "../services/socialMediaAuth";
function Login({ props, showModal, setShowModal }) {
  const handleLogin = async provider => {
    const res = await socialMediaAuth(provider);
    console.log(res.providerData[0]);
    // dispatch({ type: SET_USER, data: res.providerData[0].displayName });
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
                  <h3 className="text-2xl text-center font-semibold">
                    <FormattedMessage id="loginTitle" />
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
                  <p className="my-2 text-start text-sm leading-relaxed">
                    <FormattedMessage id="loginSubTitle" />
                  </p>
                  <div className="flex flex-row justify-around items-center">
                    <button
                      onClick={() => handleLogin(googleProvider)}
                      className="w-4/9 h-auto p-2 bg-gray-200 border-2 solid border-red-400 hover:bg-gray-100 rounded  my-2  flex flex-row items-center"
                    >
                      <svg
                        id="Layer_1"
                        height="26px"
                        width="26px"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        style={{
                          enableBackground: "new 0 0 512 512",
                        }}
                        xmlSpace="preserve"
                        {...props}
                      >
                        <path
                          style={{
                            fill: "#FBBB00",
                          }}
                          d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256 c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456 C103.821,274.792,107.225,292.797,113.47,309.408z"
                        />
                        <path
                          style={{
                            fill: "#518EF8",
                          }}
                          d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451 c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535 c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                        />
                        <path
                          style={{
                            fill: "#28B446",
                          }}
                          d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512 c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771 c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                        />
                        <path
                          style={{
                            fill: "#F14336",
                          }}
                          d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012 c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0 C318.115,0,375.068,22.126,419.404,58.936z"
                        />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                      </svg>
                      <p className="text-1xl pl-4 font-bold text-red-400">
                        Google
                      </p>
                    </button>
                    <div className="pl-12"></div>
                    <button
                      // onClick={() => handleLogin(facebookProvider)}
                      className="w-4/9 h-auto p-2 bg-gray-200 border-2 solid border-blue-400 hover:bg-gray-100 rounded  my-2 flex flex-row items-center"
                    >
                      <svg
                        height="26px"
                        viewBox="0 0 512 512"
                        width="26px"
                        {...props}
                      >
                        <path
                          d="m483.738281 0h-455.5c-15.597656.0078125-28.24218725 12.660156-28.238281 28.261719v455.5c.0078125 15.597656 12.660156 28.242187 28.261719 28.238281h455.476562c15.605469.003906 28.257813-12.644531 28.261719-28.25 0-.003906 0-.007812 0-.011719v-455.5c-.007812-15.597656-12.660156-28.24218725-28.261719-28.238281zm0 0"
                          fill="#4267b2"
                        />
                        <path
                          d="m353.5 512v-198h66.75l10-77.5h-76.75v-49.359375c0-22.386719 6.214844-37.640625 38.316406-37.640625h40.683594v-69.128906c-7.078125-.941406-31.363281-3.046875-59.621094-3.046875-59 0-99.378906 36-99.378906 102.140625v57.035156h-66.5v77.5h66.5v198zm0 0"
                          fill="#fff"
                        />
                      </svg>
                      <p className="text-1xl font-bold pl-4 text-blue-400">
                        Facebook
                      </p>
                    </button>
                  </div>
                  <div className="w-full flex flex-row justify-center items-center -mx-3">
                    <hr className="w-1/4 bg-gray-100" />
                    <span className="p-2 text-gray-600 font-bold">Or</span>
                    <hr className="w-1/4 bg-gray-100" />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col mb-4">
                      <label className="text-sm items-start">
                        <FormattedMessage id="mobileLabel" />
                      </label>
                      <input
                        className="border-b-2 py-2 px-3 text-grey-darkest border-orange-500 focus:border-b-2 focus:border-orange-500"
                        type="text"
                      />
                      <button className="mt-6 w-auto p-2 text-white border solid bg-orange-500 rounded hover:bg-orange-400">
                        <FormattedMessage id="loginButton" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    <span>
                      <FormattedMessage id="loginFooter" />{" "}
                    </span>
                    <Link to="#tac" className="font-bold text-blue-400">
                      <FormattedMessage id="toc" />
                    </Link>
                  </p>
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

export default Login;
