import React from "react";

function Login({ showModal, setShowModal }) {
  return (
    <div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-2xl text-center font-semibold">
                    Login / Sign up
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
                <div className="flex flex-col justify-center items-center relative p-6">
                  <p className="my-2 text-gray-600 text-lg leading-relaxed">
                    Login / Sign up using your
                  </p>
                  <a
                    href="/#"
                    className="my-2 flex justify-center items-center"
                  >
                    <svg
                      className="fill-current cursor-pointer text-red-500 hover:text-red-700"
                      width="26px"
                      height="26px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path>
                    </svg>
                    <p className="text pl-2">Google account</p>
                  </a>
                  <a
                    href="/#"
                    className="flex justify-center items-center pb-4"
                  >
                    <svg
                      className="fill-current cursor-pointer text-blue-500 hover:text-blue-700"
                      width="26px"
                      height="26px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <path
                        id="Facebook"
                        d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                  5.373,-12 12,-12c6.627,0 12,5.373
                  12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422
                  0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784
                  -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"
                      ></path>
                    </svg>
                    <p className="text pl-2">Facebook account</p>
                  </a>
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
