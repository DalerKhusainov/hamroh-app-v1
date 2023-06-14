import React from "react";
import Hero from "../components/Hero";
import SectionFeatures from "../components/SectionFearures";
import SectionCTA from "../components/SectionCTA";
import SectionHow from "../components/SectionHow";
import MobaileApp from "../components/MobaileApp";
import Footer from "../components/Footer";


export default function () {
  return (
      <div className="">
        <Hero />
        <SectionFeatures />
        <MobaileApp/>
        <SectionCTA />
        <SectionHow />
        <Footer/>
      </div>
  );
}
