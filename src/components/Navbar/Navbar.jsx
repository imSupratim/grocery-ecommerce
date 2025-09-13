import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";





const Navbar = () => {
    const [showMenu, setshowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false)
    const toggleMenu=()=>{
        setshowMenu(!showMenu);
    }

    useEffect(() => {
      const handleScroll=()=>{
        setIsScrolled(window.scrollY>10);
      }
      window.addEventListener('scroll', handleScroll);
      return ()=> window.removeEventListener('scroll', handleScroll);
    }, [])
    
    return(
    <header className={`bg-white fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'shadow-lg': ''}`}>
        <nav className="flex justify-between max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] items-center">
            {/* logo */}
            <a href="#" className="text-3xl font-bold">
                Nu<span className="text-orange-500 uppercase">t</span>riqo{" "}
            </a>

            {/* desktop menu */}
            <ul className="md:flex items-center gap-x-15 hidden">
                <li>
                    <a
                        href="#"
                        className="font-semibold tracking-wider text-orange-500  hover:text-zinc-800"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
                    >
                        About Us
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="font-semibold tracking-wider text-zinc-800  hover:text-orange-500"
                    >
                        Process
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
                    >
                        Contact us
                    </a>
                </li>
            </ul>


            {/* Nav Action */}
            <div className="flex items-center gap-x-5">
                <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden">
                    <input type="text" name="text" id="text" placeholder="Search" autoComplete="off" className="flex-1 h-[5vh] px-3 focus:outline-none" />
                    <button className="bg-gradient-to-b from-orange-400 to-orange-600 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl cursor-pointer">
                        <IoSearch />
                    </button>
                </div>

                <a href="#" className="text-zinc-800 hover:text-red-500 text-2xl">
                    <FaHeart />
                </a>
                <a href="#" className="text-zinc-800 hover:text-yellow-400 text-2xl">
                    <HiShoppingBag />
                </a>


                {/* Hamburger */}
                <a href="#" className="text-zinc-800 text-3xl md:hidden" onClick={toggleMenu

                }>
                    {showMenu?<TbMenu3 />:<TbMenu2 />}
                </a>
            </div>


            {/* Mobile Menu */}
             <ul className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl rounded-3xl p-10 top-30 transform -translate-x-1/2 items-center gap-x-15 md:hidden absolute -left-full transition-all duration-500 ${showMenu ? 'left-1/2' :""}`}>
                <li>
                    <a
                        href="#"
                        className="font-semibold tracking-wider text-orange-500  hover:text-zinc-800"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
                    >
                        About Us
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="font-semibold tracking-wider text-zinc-800  hover:text-orange-500"
                    >
                        Process
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
                    >
                        Contact us
                    </a>
                </li>
                <li className="flex p-1 border-2 border-orange-500 rounded-full md:hidden">
                    <input type="text" name="text" id="text" placeholder="Search" autoComplete="off" className="flex-1 h-[5vh] px-3 focus:outline-none" />
                    <button className="bg-gradient-to-b from-orange-400 to-orange-600 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl cursor-pointer">
                        <IoSearch />
                    </button>
                </li>
            </ul>
        </nav>
    </header>
)
}

export default Navbar;
