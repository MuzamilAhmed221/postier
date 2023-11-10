import React from "react";
import _Navbar from "../../components/Layout/_Navbar";
import HeroSections from "./sections/HeroSections";
import SectionOne from "./sections/SectionOne";
import { sections } from "../../helper/Helper";
import SectionTwo from "./sections/SectionTwo";
import SectionThree from "./sections/SectionThree";

const Home = () => {
  return (
    <div>
      <_Navbar />
      <HeroSections />
      {sections?.map((items, index) => {
        return <SectionOne key={index} items={items} />;
      })}
      <SectionTwo/>
      <SectionThree/>
    </div>
  );
};

export default Home;
