
"use client";
import React from "react";

import Link from "next/link";
import CardProducts from "../components/CardProducts";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import SubHero from "../components/SubHero";
import StripePricingTable from "@/components/StripePricingTable";
import Footer from "@/components/Footer";

const HomePage: React.FC = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">

      <Hero />
      <SubHero />
      <CardProducts />
      <StripePricingTable />
      <Faq />
      <Footer />
      
    </div>
  );
};

export default HomePage;
