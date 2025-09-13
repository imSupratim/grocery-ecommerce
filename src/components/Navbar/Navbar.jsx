import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between max-w-[1400px] mx-auto px-6 md:px-12 h-[12vh] items-center">
        {/* logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-wide hover:scale-105 transition-transform"
        >
          Nu
          <span className="text-blue-500 uppercase">t</span>
          riqo
        </Link>

        {/* desktop menu */}
        <ul className="md:flex items-center gap-x-10 hidden">
          {["Home", "About Us", "Process", "Contact Us"].map((item, i) => (
            <li key={i}>
              <a
                href="#"
                className="relative font-semibold tracking-wide text-zinc-800 hover:text-blue-500 transition-colors group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Nav Action */}
        <div className="flex items-center gap-x-5">
          {/* Search */}
          <div className="md:flex hidden items-center p-1 border-2 border-blue-500 rounded-full focus-within:shadow-md transition-all">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 h-[42px] px-3 bg-transparent focus:outline-none text-sm"
            />
            <button className="bg-gradient-to-b from-blue-400 to-blue-600 text-white w-10 h-10 flex justify-center items-center rounded-full text-lg hover:scale-105 transition-transform">
              <IoSearch />
            </button>
          </div>

          {/* Icons */}
          <a
            href="#"
            className="text-zinc-800 hover:text-red-500 text-2xl transition-transform hover:scale-110"
          >
            <FaHeart />
          </a>
          <a
            href="#"
            className="text-zinc-800 hover:text-yellow-500 text-2xl transition-transform hover:scale-110"
          >
            <HiShoppingBag />
          </a>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="text-zinc-800 text-3xl md:hidden hover:scale-110 transition-transform"
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex flex-col gap-y-8 bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg p-10 absolute top-[90px] left-1/2 transform -translate-x-1/2 transition-all duration-500 md:hidden w-[80%] ${
            showMenu ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {["Home", "About Us", "Process", "Contact Us"].map((item, i) => (
            <li key={i}>
              <a
                href="#"
                className="font-semibold text-lg tracking-wide text-zinc-800 hover:text-blue-500 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
          <li className="flex items-center p-1 border-2 border-blue-500 rounded-full">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 h-[42px] px-3 bg-transparent focus:outline-none text-sm"
            />
            <button className="bg-gradient-to-b from-blue-400 to-blue-600 text-white w-10 h-10 flex justify-center items-center rounded-full text-lg hover:scale-105 transition-transform">
              <IoSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
