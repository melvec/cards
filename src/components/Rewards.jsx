import React from "react";

const Rewards = (props) => {
  return (
    <div>
      <div className="text-white">
        <h2 className="text-lg font-bold mb-2">Rewards</h2>
        <ul className="flex space-x-6">
          {props.rewards?.map((reward, index) => (
            <li key={index} className="flex items-center space-x-2 text-sm">
              <span class="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M287.9 5c-2.9-6-11-6-14 0L209 123.9l-128.6 18.7c-6.7 1-9.3 9.2-4.5 13.8l93 90.7-22 128.2c-1.1 6.6 5.8 11.7 11.7 8.6L288 416l115.4 60.5c5.9 3.1 12.8-2 11.7-8.6l-22-128.2 93-90.7c4.8-4.6 2.2-12.8-4.5-13.8L367 123.9 287.9 5z" />
                </svg>
              </span>
            </li>
          ))}
        </ul>
        <hr className="w-40 border-t-1 border-white my-4" />
      </div>
    </div>
  );
};

export default Rewards;
