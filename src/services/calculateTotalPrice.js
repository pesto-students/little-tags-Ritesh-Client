const calculateTotalPrice = itemList => {
  let totalPrice = 0;
  const temp = itemList.map(item => totalPrice + item.price * item.quantity);
  totalPrice = temp.reduce((a, b) => a + b, 0);
  return totalPrice;
};

export default calculateTotalPrice;
