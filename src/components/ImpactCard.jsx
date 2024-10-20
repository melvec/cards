import React from "react";
import CardCenterDetails from "./CardCenterDetails";
import SocialMedia from "./SocialMedia";

const ImpactCard = (props) => {
  const { title, impact, mainImage, amount, middleDescription, rewards } =
    props.card;
  return (
    <div>
      <div className="flex justify-center">
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-white/30">
          <div className="absolute top-0 left-0 w-20 h-20 rounded-full overflow-hidden m-4 bg-white z-10">
            <img
              src="https://batrescue.org.au/wp-content/uploads/2022/03/bat-rescure-logo.png"
              alt="circle image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[30rem] w-[22rem] relative">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src={mainImage}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          {/* This is the hover part */}
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl font-bold text-white">
              {title}
            </h1>
            <hr className="w-40 border-t-1 border-white my-4" />
            {/* 3 columns with icons and text */}
            <div className="grid grid-cols-3 gap-6 text-white">
              <CardCenterDetails card={props.card} />
              <CardCenterDetails card={props.card} />
              <CardCenterDetails card={props.card} />
            </div>
            <hr className="w-40 border-t-1 border-white my-4" />
            <div className="flex align-items-center">
              <div className="text-white">
                <h2 className="text-lg font-bold mb-2">Rewards</h2>
                <ul className="flex space-x-6">
                  {rewards?.map((reward, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-2 text-sm"
                    >
                      {/* Example icon */}
                      <img
                        src="/path-to-your-icon.png"
                        alt="icon"
                        className="w-4 h-4"
                      />
                      <span>{reward}</span>
                    </li>
                  ))}
                </ul>

                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactCard;
