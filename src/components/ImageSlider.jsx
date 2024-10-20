import { useState } from "react";
import { motion } from "framer-motion";
import ImpactCard from "./ImpactCard";
import { ChevronLeft, ChevronRight } from "react-feather";

const card1 =
  "https://batrescue.org.au/wp-content/uploads/2021/06/david_white_flying_bat-img.jpg";
const card2 =
  "https://media.istockphoto.com/id/1496186646/photo/staying-connected-on-the-farm-via-mobile-network.jpg?s=1024x1024&w=is&k=20&c=F5xu6T8DIBZgjjHvbJATILiQU2KkEa2U4XNbUS6srkg=";
const card3 =
  "https://media.istockphoto.com/id/1435661969/photo/close-up-of-children-holding-a-planet-at-the-beach.jpg?s=1024x1024&w=is&k=20&c=yFUId3gMoFOOrXnWNEhn2uDhC4FMTYxHLmh4wzQyDX8=";
const card4 =
  "https://cdn.pixabay.com/photo/2023/12/14/18/38/sheep-8449481_1280.jpg";
const card5 =
  "https://cdn.pixabay.com/photo/2023/12/14/18/38/sheep-8449481_1280.jpg";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [card1, card2, card3, card4, card5];

  const card = {
    title: "Bats rescue",
    impact: "Animal treatment",
    mainImage: "https://a-z-animals.com/media/2021/04/Fruit-bat-header.jpg",
    contribution: "Contributed of total",
    amount: "40%",
    middleDescription: "tn",
    rewards: [1, 2, 4],
  };

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  return (
    <div className="flex w-screen h-screen items-center justify-center bg-white">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "40%", position: "absolute" }}
        >
          <ImpactCard card={card} />
        </motion.div>
      ))}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={handleBack}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={handleNext}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="fixed bottom-10">
        <button className="rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-2 px-6 font-semibold text-white capitalize shadow-lg shadow-pink-500/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-pink-500/80">
          Buy here
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
