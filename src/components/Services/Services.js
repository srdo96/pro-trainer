import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "../Card/Card";

const Services = () => {
  const [services, setServices] = useState([]);
  const [enrollList, setEnrollList] = useState([]);

  const handleEnroll = (selectedItem) => {
    let newCart = [];
    const exists = enrollList.find((item) => item.id === selectedItem.id);
    console.log(exists);
    if (exists) {
      toast(`${selectedItem.title} already added.`);
    } else {
      newCart = [...enrollList, selectedItem];
      setEnrollList(newCart);
    }
    console.log("list: ", enrollList);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="bg-black">
      <ToastContainer />
      <h1>Services</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {services.map((service) => (
          <Card
            key={service.id}
            service={service}
            handleEnroll={handleEnroll}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
