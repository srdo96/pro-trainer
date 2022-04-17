import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative mt-16  bg-black">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-black"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              <span className="text-red-500">Pro</span> Trainer
            </span>

            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-deep-purple-50 text-white">
                Hear you can learn how to train your self. How to get fit and
                achieve a healthy body.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div className="">
              <p className="font-semibold tracking-wide text-teal-accent-400 text-red-600">
                Category
              </p>
              <ul className="mt-2 space-y-2 text-white">
                <li>
                  <Link
                    to="/services"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Cart
                  </a>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400 text-red-500">
                Social
              </p>
              <ul className="mt-2 space-y-2 text-white">
                <li>
                  <a
                    href="https://www.youtube.com/c/athleanx"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-red-500"
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/athleanx/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-blue-500"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/athleanx/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-orange-600 "
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright 2020 Lorem Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
