import React from "react";

const CardCenterDetails = (props) => {
  const { amount, impact } = props.card;
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center">
        <div className="flex  items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 mb-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6m0 6h.01M4.293 16.293a1 1 0 011.414 0l2.293 2.293 4.293-4.293a1 1 0 011.414 0l6.293 6.293a1 1 0 001.414-1.414l-6.293-6.293a1 1 0 00-1.414 0L8 15.586l-2.293-2.293a1 1 0 00-1.414 0L1 17.586v-2.293"
            />
          </svg>
          {amount}
        </div>

        <p>{impact}</p>
      </div>
    </div>
  );
};

export default CardCenterDetails;
