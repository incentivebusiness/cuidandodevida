
"use client";
import React from "react";

import Link from "next/link";
import CardProducts from "../components/CardProducts";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import SubHero from "../components/SubHero";
import Footer from "@/components/Footer";
import Aboult from "@/components/Aboult";

const HomePage: React.FC = () => {

  return (
    <>      <Hero />
      <SubHero />
      <CardProducts />
      <Aboult/>
      <Faq />
      <Footer />
      </>

  );
};

export default HomePage;
