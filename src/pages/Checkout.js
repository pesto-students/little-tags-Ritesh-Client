import React, { useState } from "react";
import Stepper from "./Stepper";
import Loading from "./Loading";
import Cart from "./Cart";
import Address from "./Address";
import Payment from "./Payment";
import EmptyPage from "./EmptyPage";
import { store } from "../redux/store";
import data from "../localData/data";
function Checkout() {
  const [itemList, setItemList] = useState([]);
  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setItemList(store.getState().cartListReducer.items);
    const temp = [
      {
        id: 31,
        title: "Floral Blouse",
        price: 20,
        description:
          "B Slim Beige Soft Sleek Under Clothing Seamless High Waist Women Body Shapewear Shorts",
        category: "women clothing",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/31WrGdqfijL.jpg",
        size: "L",
        quantity: "12",
      },
      {
        id: 8,
        title: "Men's Coats Jackets",
        price: 44.39,
        description:
          "Nilesh Men's Coats Jackets,Winter Casual Fashion Pure Color Patchwork Jacket Zipper Outwear Coat (Nilesh JK67)",
        category: "men clothing",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/41kpS4bT4vL.jpg",
        size: "m",
        quantity: "5",
      },
      {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description:
          "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men clothing",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51%2BuK8oPfyL._SY679_.jpg",
        size: "xl",
        quantity: 1,
      },
    ];
    // setItemList(temp);
    setLoad(false);
  }, 1.5 * 1000);

  const [currentStep, setCurrentStep] = useState(1);

  const stepArray = ["Bag", "Address", "Payment"];

  const handleClick = clickType => {
    let newStep = currentStep;
    clickType === "next" ? newStep++ : newStep--;

    // Check if steps are within the boundary
    if (newStep > 0 && newStep <= stepArray.length) {
      setCurrentStep(newStep);
    }
  };

  if (load) {
    return <Loading />;
  }
  return (
    <div className=" sm:mx-24 sm:px-16 px-4 mx-auto">
      <div className="container horizontal mt-5 mb-12">
        <Stepper steps={stepArray} currentStepNumber={currentStep} />
      </div>
      {itemList.length !== 0 ? (
        currentStep === 1 ? (
          <Cart handleClick={handleClick} itemList={itemList} />
        ) : currentStep === 2 ? (
          <Address handleClick={handleClick} itemList={itemList} />
        ) : (
          <Payment handleClick={handleClick} itemList={itemList} />
        )
      ) : (
        <EmptyPage />
      )}
    </div>
  );
}

export default Checkout;
