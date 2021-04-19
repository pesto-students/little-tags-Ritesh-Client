import { SHOPKART_BACKEND_URI } from "../config/default";
const URL = SHOPKART_BACKEND_URI + "api/v1/orders";
const orderHistory = async cookies => {
  return await fetch(URL, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      authorization: cookies.token,
    },
  });
};
export default orderHistory;
