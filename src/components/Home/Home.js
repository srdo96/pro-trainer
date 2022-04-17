import React from "react";
import banner from "../../img/cover0.png";
import me from "../../img/me1.png";
const Home = () => {
  return (
    <div>
      <img src={banner} alt="" />
      <div className="grid grid-cols-2 bg-black">
        <div>
          <img className="w-2/3 ml-24" src={me} alt="" />
        </div>
        <div className="mr-12">
          <h1 className="text-xl mt-20 text-red-600  ">About Me</h1>
          <h3 className="text-gray-400 border-l-2 pl-2 text-2xl">
            IF YOU WANNA LOOK LIKE ME <br />
            YOU'VE GOTTA TRAIN LIKE ME
          </h3>
          <p className="text-white mt-3  ">
            <span className="text-xl">Hi,</span> this is Jeff Cavaliere <br />{" "}
            MSPT, CSCS served as both the Head Physical Therapist and Assistant
            Strength Coach for the New York Mets and is now one of the world’s
            most trusted authorities on science based training and performance.
            The most accomplished musicians, actors, athletes, teams and well
            over 11 million followers rely on my hands-on experience and
            expertise to get them looking, feeling and moving like athletes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
