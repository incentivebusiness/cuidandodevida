
"use client";
import React from "react";
import CardProducts from "../components/CardProducts";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import SubHero from "../components/SubHero";
import Footer from "@/components/Footer";
import Aboult from "@/components/Aboult";
import Regulament from "@/components/Regulament";
import ConsentModal from "@/components/ConsentModal";

const HomePage: React.FC = () => {

  return (
    <>
      <Hero />
      <ConsentModal/>
      <SubHero />
      <CardProducts />
      <Aboult />
      <Faq />
      <Regulament />
      <Footer />
    </>

  );
};

export default HomePage;
