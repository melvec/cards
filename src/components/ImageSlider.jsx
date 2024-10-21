import { useState } from "react";
import { motion } from "framer-motion";
import ImpactCard from "./ImpactCard";
import { ChevronLeft, ChevronRight } from "react-feather";
import logobat from "../assets/logobat.webp";

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

  const cards = [
    {
      card_type: "primary",
      title: "Bats rescue",
      impact: "Animal treatment",
      logo: "https://batrescue.org.au/wp-content/uploads/2022/03/bat-rescure-logo.png",
      mainImage: "https://a-z-animals.com/media/2021/04/Fruit-bat-header.jpg",
      contribution: "Contributed of total",
      amount: "40%",
      middleDescription: "tn",
      rewards: [1, 2, 4],
    },
    {
      card_type: "secondary",
      title: "Bats rescue Inc",
      description:
        "Bat Rescue Inc. is a non-proﬁt volunteer organisation whose members are permitted under Queensland’s Department of Environment and Science (DES) to rescue sick, injured and orphaned ﬂying-foxes and microbats.",
      impact: "",
      logo: "https://batrescue.org.au/wp-content/uploads/2021/07/conservation-icon.png",
      mainImage: "",
      contribution: "",
      amount: "",
      middleDescription: "",
      rewards: [],
    },
    {
      card_type: "secondary",
      title: "Proof of Impact",
      logo: "https://batrescue.org.au/wp-content/uploads/2021/07/conservation-icon.png",
      impact: "Animal treatment",
      mainImage:
        "https://batrescue.org.au/wp-content/uploads/2021/05/Distribution-Range.png",
      contribution: "Contributed of total",
      amount: "40%",
      middleDescription: "tn",
      rewards: [1, 2, 4],
    },
    {
      title: "Participating Brands",
      impact: "Animal treatment",
      logo: "https://batrescue.org.au/wp-content/uploads/2021/07/conservation-icon.png",
      mainImage:
        "https://batrescue.org.au/wp-content/uploads/2021/06/roosting-img.jpg",
      contribution: "Contributed of total",
      amount: "40%",
      middleDescription: "tn",
      rewards: [1, 2, 4],
    },
    {
      card_type: "primary",
      title: "Rewards",
      impact: "",
      logo: logobat,
      mainImage: "",
      contribution: "Contributed of total",
      amount: "40%",
      middleDescription: "tn",
      rewards: [1, 2, 4],
    },
  ];

  const positions = ["center", "left1", "left", "right", "right1"];
  // const positions = ["center", "left1", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-b from-black via-neutral-800 to-gray-500/90">
      {cards.map((card, index) => (
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
