import React from "react";
import ImageSlider from "./components/ImageSlider";
import ImpactCard from "./components/ImpactCard";

const App = () => {
  const sampleData = {
    title: "Tree Planting",
    brand: "Everclime",
    description: "Contributing to a greener planet by planting trees.",
    image: "https://example.com/image.jpg",
    proof: [
      { logo: "https://example.com/logo1.png", name: "Verified by XYZ" },
      { logo: "https://example.com/logo2.png", name: "Gold Standard" },
    ],
    rewards: ["100 Loyalty Points", "15% Discount on Next Purchase"],
    progress: "500 Trees Planted",
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <ImageSlider />
    </div>
  );
};

export default App;
