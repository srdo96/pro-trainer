import React from "react";
import banner from "../../img/cover0.png";

const Banner = () => {
  return (
    <div className="relative">
      <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
        <div
          className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
          data-carousel-item=""
        >
          <img
            src={banner}
            className="block absolute lg:top-80 top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
