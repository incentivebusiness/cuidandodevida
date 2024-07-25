'use client';

import React from "react";
import LoginForm from "./components/LoginForm";
import CardProducts from "./components/CardProducts";
import Faq from "./components/Faq";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SubHero from "./components/SubHero";
import { AuthProvider } from "./contexts/AuthContext";

const HomePage: React.FC = () => {
  return (
    <AuthProvider>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Header />
        <Hero />
        <SubHero />
        <CardProducts />
        <Faq />
      </div>
    </AuthProvider>
  );
};

export default HomePage;
