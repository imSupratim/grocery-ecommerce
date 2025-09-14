import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-blue-50 py-20">
      <div className="flex flex-wrap gap-y-12 max-w-[1400px] mx-auto px-10">
        {/* Logo & About */}
        <div className="flex-1 basis-[300px]">
          <a
            href="#"
            className="text-3xl font-extrabold tracking-wide hover:scale-105 transition-transform"
          >
            Nu<span className="text-blue-500 uppercase">t</span>rico
          </a>

          <p className="text-zinc-600 mt-6 max-w-[350px]">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>

          <p className="text-zinc-700 mt-6">
            2025 &copy; All rights reserved
          </p>
        </div>

        {/* Company Links */}
        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-900 text-2xl font-bold">Company</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-blue-500 text-zinc-800 transition-colors">
              About
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-blue-500 text-zinc-800 transition-colors">
              FAQ's
            </a>
          </li>
        </ul>

        {/* Support Links */}
        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-900 text-2xl font-bold">Support</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-blue-500 text-zinc-800 transition-colors">
              Support Centre
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-blue-500 text-zinc-800 transition-colors">
              Feedback
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-blue-500 text-zinc-800 transition-colors">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Newsletter */}
        <div>
          <h5 className="text-zinc-900 text-2xl font-bold">Stay Connected</h5>
          <p className="mt-6 text-zinc-600">
            Questions or Feedbacks?<br />
            We'd love to hear from you
          </p>

          <div className="bg-white p-1 rounded-lg mt-6 flex flex-1 shadow-md">
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Email Address"
              className="h-[5vh] pl-4 flex-1 focus:outline-none text-sm"
            />
            <button className="bg-gradient-to-b from-blue-400 to-blue-600 p-2 rounded-lg text-white text-2xl hover:scale-105 transition-transform">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
