import React from "react";
import Grocery from "../../assets/grocery.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="min-h-screen max-w-[1400px] mx-auto flex md:flex-row flex-col px-10 items-center md:pt-28 pt-32">
          {/* Hero Content */}
          <div className="flex-1 text-center md:text-left">
            <span className="bg-blue-100 text-blue-600 text-lg px-5 py-2 rounded-full shadow-sm">
              Quality You Can Trust...
            </span>
            <h1 className="md:text-7xl text-5xl font-extrabold leading-tight mt-6">
              Tasty Organic{" "}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
                Fruits
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Veggies
              </span>{" "}
              Anytime, Anywhere
            </h1>
            <p className="text-zinc-600 md:text-lg text-md max-w-[530px] mt-6 mb-10 mx-auto md:mx-0">
              Bred for a high content of beneficial substances. Our products are
              always fresh, healthy, and full of nutrients for your everyday
              needs.
            </p>
            <Button content="Shop Now" />
          </div>

          {/* Hero Image */}
          <div className="flex-1 mt-10 md:mt-0 flex justify-center">
            <img
              src={Grocery}
              alt="grocery-img"
              className="w-full max-w-[550px] drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-indigo-200/30 rounded-full blur-3xl -z-10"></div>
      </section>
    </>
  );
};

export default Hero;
