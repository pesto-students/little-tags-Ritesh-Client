import { SHOPKART_BACKEND_URI } from "../config/default";
// import firebase from "firebase/app";
// // import firebase from "../config/firebaseConfig";
// const checkAuth = () => {
//   const user = firebase.auth().currentUser;
//   if (user) {
//     return user.providerData[0];
//   } else {
//     return null;
//   }
// };
const checkAuth = async cookies => {
  console.log(cookies);
  const URL = SHOPKART_BACKEND_URI + "api/v1/auth";
  return await fetch(URL, {
    method: "GET",
    headers: {
      authorization: cookies.token,
    },
  });
};
export default checkAuth;
