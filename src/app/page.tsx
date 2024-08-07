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
import FormPetAssistence from "@/components/FormPetAssistence";
import FormFuneralAssistance from "@/components/FormFuneralAssistence";
import FormContrato from "@/components/FormContrato";
import FormPlanePlus from "@/components/FormPlanePlus";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Header />
      <Hero />
      {/* <FormPetAssistence/>
      <FormFuneralAssistance/>
      <FormContrato/> */}
      <FormPlanePlus/>
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
