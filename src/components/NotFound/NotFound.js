import { ArrowRightIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import lost from "../../img/lost.jpg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="bg-img">
      <div className="text-center">
        <p className="text-3xl pt-28">
          4<span className="italic">0</span>4
        </p>
        <p className="text-4xl font-bold">
          Page <span className="italic">Not</span> Found
        </p>
      </div>
    </div>
  );
};

export default NotFound;
