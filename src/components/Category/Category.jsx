import React from "react";
import Heading from "../Heading/Heading";
import MeatAndSeaFood from "../../assets/meat-and-seafood.png";
import FruitsAndVeggies from "../../assets/fruits-and-veggies.png";
import DairyAndEggs from "../../assets/dairy-and-eggs.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Category = () => {
  const renderCards = category.map((card) => {
    return (
      // card
      <div className="flex-1 basis-[300px] " key={card.id}>
        {/* card image */}
        <div className="w-full min-h-[30vh] -mb-10 relative">
          <img src={card.image} className="absolute bottom-0" />
        </div>

        {/* card content */}
        <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
          <h3 className="text-xl font-bold text-zinc-800">{card.title}</h3>
          <p className="text-zinc-600 mt-3 mb-9">{card.description}</p>
          <Link
            to={card.path}
            className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-3 rounded-full md:text-lg text-md font-semibold shadow-md hover:shadow-blue-300/50 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            See All
          </Link>
        </div>
      </div>
    );
  });

  return (
    <>
      <section className="py-20 max-w-[1400px] mx-auto px-10">
        <Heading highlight="Shop" heading="by Category" />

        {/* Category Cards */}
        <div className="flex flex-wrap gap-10 md:mt-10">{renderCards}</div>
      </section>
    </>
  );
};

export default Category;

const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: FruitsAndVeggies,
    path:'/fruits'
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: DairyAndEggs,
    path:'/dairy'
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: MeatAndSeaFood,
    path:'/seafood'
  },
];
