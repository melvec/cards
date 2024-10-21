import React from "react";
import CardCenterDetails from "./CardCenterDetails";
import Rewards from "./Rewards";
import SocialMedia from "./SocialMedia";

const ImpactCard = (props) => {
  const {
    title,
    impact,
    mainImage,
    amount,
    middleDescription,
    rewards,
    logo,
    description,
    card_type,
  } = props.card;
  return (
    <div>
      <div className="flex justify-center ">
        <div className="  group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-white/30">
          <div className="absolute top-0 left-0 w-20 h-20 rounded-full overflow-hidden m-4 bg-white z-10">
            <img
              src={logo}
              alt="circle image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[30rem] w-[22rem] relative">
            {mainImage && (
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={mainImage}
                alt=""
              />
            )}
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          {/* This is the hover part */}
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl font-bold text-white">
              {title}
            </h1>
            <hr className="w-40 border-t-1 border-white my-4 " />
            <div>
              {card_type == "secondary" && (
                <div>
                  <h2 className="mt-5 font-dmserif text-l  text-white">
                    {description}
                  </h2>

                  <button className="rounded-full my-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 py-2 px-6 font-semibold text-white capitalize shadow-lg shadow-black/50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-black/80 hover:bg-opacity-90 active:scale-95 active:shadow-black/100">
                    See More
                  </button>
                </div>
              )}

              {/* 3 columns with icons and text */}
              {card_type == "primary" && (
                <div className="grid grid-cols-3 gap-6 text-white">
                  <CardCenterDetails card={props.card} />
                  <CardCenterDetails card={props.card} />
                  <CardCenterDetails card={props.card} />
                </div>
              )}
            </div>

            <hr className="w-40 border-t-1 border-white my-4 mt-2" />

            <div className="flex align-items-center">
              <div className="text-white">
                {card_type == "primary" && (
                  <>
                    {" "}
                    <Rewards rewards={rewards} />
                    <SocialMedia />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactCard;
