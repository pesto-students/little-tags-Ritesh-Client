import { SHOPKART_BACKEND_URI } from "../config/default";
const URL = SHOPKART_BACKEND_URI + "api/v1/orders";
const makeOrder = async (data, cookies) => {
  return await fetch(URL, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      authorization: cookies.token,
    },
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
};

export default makeOrder;
