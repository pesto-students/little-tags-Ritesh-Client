import { SHOPKART_BACKEND_URI } from "../config/default";
const URL = SHOPKART_BACKEND_URI + "api/v1/product";
const getAllProducts = async cookies => {
  const result = await fetch(URL, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      authorization: cookies.token,
    },
  });
  return result;
};
export default getAllProducts;
