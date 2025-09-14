import React from "react";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[1400px] px-10 mx-auto py-20">
        <Heading highlight="Customers" heading="Saying" />

        <div
          className="py-5 flex justify-end
             gap-x-3"
        >
          <button className="custom-prev text-2xl text-zinc-800 justify-center items-center flex rounded-lg w-11 h-11 bg-zinc-100 hover:bg-gradient-to-b hover:from-blue-400 hover:to-blue-500 hover:text-white cursor-pointer">
            <IoIosArrowBack />
          </button>
          <button className="custom-next text-2xl text-zinc-800 justify-center items-center flex rounded-lg w-11 h-11 bg-zinc-100 hover:bg-gradient-to-b hover:from-blue-400 hover:to-blue-500 hover:text-white cursor-pointer">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {review.map((item) => {
            return (
              <SwiperSlide className="rounded-xl shadow-md overflow-hidden">
                {/* Top Section with light bg */}
                <div className="bg-orange-50 p-6 flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-red-500 border-2 border-orange-500 overflow-hidden">
                    <img src={item.image} className="w-full h-full" />
                  </div>

                  {/* Name / Profession / Rating */}
                  <div>
                    <h5 className="text-lg font-semibold">{item.name}</h5>
                    <p className="text-sm text-zinc-600">{item.profession}</p>
                    <div className="flex items-center gap-1 text-orange-500 mt-2">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <FaStar key={i} className="text-sm" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Section with review */}
                <div className="bg-white p-6">
                  <p className="text-zinc-600 leading-relaxed">{item.para}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

const review = [
  {
    id: 1,
    name: "Sujato Hui",
    profession: "Food Blogger",
    rating: 3,
    para: "FresgBasket is my go-to store for all grocery need. Their prodice is always fresh, and the delivery is super fast, I love the user-friendly interface",
    image: Customer1,
  },
  {
    id: 2,
    name: "Animesh Kundu",
    profession: "Chef",
    rating: 4,
    para: "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
    image: Customer2,
  },
  {
    id: 3,
    name: "Sujato Hui",
    profession: "Nutritionist",
    rating: 3,
    para: "FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
    image: Customer3,
  },
  {
    id: 4,
    name: "Sayan Ghosh",
    profession: "Model",
    rating: 5,
    para: "Shopping online with FreshBasket has saved me so much time. I trust them for my familys weekly groceries—always fresh, affordable, and reliable.",
    image: Customer4,
  },
  {
    id: 5,
    name: "Rahul Mahato",
    profession: "Fitness Coach",
    rating: 3,
    para: "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!",
    image: Customer5,
  },
];
