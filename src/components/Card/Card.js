import React from "react";
import { Link } from "react-router-dom";

const Card = ({ service }) => {
  const { img, title, desc, price } = service;
  // console.log(service);
  return (
    <div>
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg w-min" src={img} alt="" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {desc.slice(0, 150)}
          </p>

          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            <Link
              to="/checkout"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
