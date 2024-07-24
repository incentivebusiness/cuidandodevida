'use client'

import React from "react";
import LoginForm from "./components/LoginForm";
import Link from "next/link";
import CardProducts from "./components/CardProducts";
import Faq from "./components/Faq";
import Header from "./components/Header";
import AssistenceForm from './components/AssistenceForm'

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      
      <Header/>
      
          <CardProducts/>
          <Faq/>
        
      <AssistenceForm/>
     
    </div>
  );
};

export default HomePage;
