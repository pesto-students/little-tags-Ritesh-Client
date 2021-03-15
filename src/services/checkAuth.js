import firebase from "firebase/app";
// import firebase from "../config/firebaseConfig";
const checkAuth = () => {
  const user = firebase.auth().currentUser;
  if (user) {
    return user.providerData[0];
  } else {
    return null;
  }
};
export default checkAuth;
