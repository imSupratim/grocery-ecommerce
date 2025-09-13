import React from "react";

const Button = (props) => {
  return (
    <>
      <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-3 rounded-full md:text-lg text-md font-semibold shadow-md hover:shadow-blue-300/50 hover:scale-105 transition-all duration-300 cursor-pointer">
        {props.content}
      </button>
    </>
  );
};

export default Button;
