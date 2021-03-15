import firebase from "../config/firebaseConfig";
const socialMediaAuth = provider => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(res => {
      return res.user;
    })
    .catch(error => {
      return error;
    });
};

export default socialMediaAuth;
