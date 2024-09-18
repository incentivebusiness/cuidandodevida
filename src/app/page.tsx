
"use client";
import React from "react";
import CardProducts from "../components/CardProducts";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import SubHero from "../components/SubHero";
import Footer from "@/components/Footer";
import Cards from "@/components/Cards";
import Regulament from "@/components/Regulament";
import ConsentModal from "@/components/ConsentModal";

const HomePage: React.FC = () => {

  return (
    <>
      <Hero />
      <ConsentModal/>
      <SubHero />
      <CardProducts />
      <Cards/>
      <Faq />
      <Regulament />
      <Footer />
    </>

  );
};

export default HomePage;
