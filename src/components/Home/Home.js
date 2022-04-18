import React from "react";
import Intro from "../Intro/Intro";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Intro></Intro>
    </div>
  );
};

export default Home;
