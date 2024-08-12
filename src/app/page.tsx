"use client";

import React from "react";
// import LoginForm from "../components/LoginForm";
import CardProducts from "../components/CardProducts";
import Faq from "../components/Faq";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SubHero from "../components/SubHero";
import StripePricingTable from "@/components/StripePricingTable";
import Footer from "@/components/Footer";
import SendDocumentButton from "@/components/sendDocumentButton";
import DownloadFile from "@/components/DownloadFile";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Header />
      <Hero /> 
      <DownloadFile/>
      <SendDocumentButton/>
      <SubHero />
      <CardProducts />
      <StripePricingTable />
      <Faq />
      <Footer/>
    </div>
  );
};

export default HomePage;
