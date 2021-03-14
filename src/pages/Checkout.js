import React, { useState } from "react";
import Stepper from "./Stepper";
import data from "../localData/data";
import Loading from "./Loading";
import Cart from "./Cart";
import Address from "./Address";
import Payment from "./Payment";
function Checkout() {
  const [itemList, setItemList] = useState([]);
  const [load, setLoad] = useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setItemList(data.slice(3, 6));
      // setItemList([]);
      setLoad(false);
    }, 3 * 1000);
  }, []);

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
      {currentStep === 1 ? (
        <Cart handleClick={handleClick} itemList={itemList} />
      ) : currentStep === 2 ? (
        <Address handleClick={handleClick} />
      ) : (
        <Payment handleClick={handleClick} itemList={itemList} />
      )}
    </div>
  );
}

export default Checkout;
