import React, { useState, useEffect, useRef } from "react";

const Stepper = ({ steps, currentStepNumber }) => {
  const [stepperSteps, setStep] = useState([]);
  const stepsStateRef = useRef();

  useEffect(() => {
    const stepsState = steps.map(
      (step, index) => {
        const stepObj = {};
        stepObj.description = step;
        stepObj.completed = false;
        stepObj.highlighted = index === 0 ? true : false;
        stepObj.selected = index === 0 ? true : false;
        return stepObj;
      },
      [steps]
    );

    stepsStateRef.current = stepsState;

    const currentSteps = updateStep(currentStepNumber - 1, stepsState);
    setStep(currentSteps);
  }, [currentStepNumber, steps]);

  useEffect(() => {
    const currentSteps = updateStep(
      currentStepNumber - 1,
      stepsStateRef.current
    );
    setStep(currentSteps);
  }, [currentStepNumber]);

  function updateStep(stepNumber, steps) {
    const newSteps = [...steps];

    let stepCounter = 0;
    while (stepCounter < newSteps.length) {
      //current step
      if (stepCounter === stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: true,
          selected: true,
          completed: false,
        };
        stepCounter++;
      }
      // Past step
      else if (stepCounter < stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: true,
          completed: true,
        };
        stepCounter++;
      }
      // Future steps
      else {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: false,
          completed: false,
        };
        stepCounter++;
      }
    }
    return newSteps;
  }

  const svgs = [
    "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
    "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
    "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  ];

  const stepsDisplay = stepperSteps.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== stepperSteps.length - 1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center text-teal-600">
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3  ${
              step.selected ? "bg-blue-700 text-white font-bold" : ""
            }`}
          >
            {step.completed ? (
              <span className="text-white font-bold text-xl">&#10003;</span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-mail "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={svgs[index]}
                />
              </svg>
            )}
          </div>
          <div
            className={`absolute top-0  text-center mt-16 w-32 text-xs font-medium uppercase ${
              step.highlighted ? "text-gray-900" : "text-gray-400"
            }`}
          >
            {step.description}
          </div>
        </div>
        <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300 "></div>
      </div>
    );
  });

  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {stepsDisplay}
    </div>
  );
};

export default Stepper;
