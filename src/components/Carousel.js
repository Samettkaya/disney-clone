import React from "react";
import slider from "../img/slider.jpeg";
import logotitle from "../img/logo-title.webp";

function Carousel() {
  return (
    <div className="h-[561px] group">
      <div className="overflow-hidden">
      <img className="h-[561px] cursor-pointer w-full snap-none hover:scale-105  transition delay-150 duration-300 ease-in" src={slider} />
      </div>
      <div className="absolute top-[240px] left-[90px]">
          <div className=" text-center ">
              <a>
              <img className="h-[140px] w-[440px] cursor-pointer" src={logotitle} />
              <p className="text-white text-al m-4 cursor-pointer ">Sinemalarda</p>
              </a>
             
          </div>
          <div className="justify-center  flex" >
          <p className="cursor-pointer bg-[#F4B315] w-[240px] h-12 text-black rounded-[24px] font-medium flex justify-center items-center hover:bg-[#f4b515e5]">
                  DAHA FAZLASI İÇİN 
              </p>
          </div>
          
      </div>

    </div>
  );
}

export default Carousel;
