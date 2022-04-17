import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="bg-black">
      <h1>Services</h1>
      <div className="grid grid-cols-3">
        {services.map((service) => (
          <Card key={service.id} service={service}></Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
