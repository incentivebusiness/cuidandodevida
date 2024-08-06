import SignDocument from "@/components/SignDocument";
import React from "react";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Assinar documento</h1>
      <SignDocument />
    </main>
  );
};

export default page;
