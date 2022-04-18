import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Services = () => {
  const [services, setServices] = useState([]);

  // data load
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services" className="bg-black">
      <h1 className="text-red-600 text-center text-3xl pt-9 pb-5 font-bold">
        Services
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {services.map((service) => (
          <Card key={service.id} service={service}></Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
