"use client";
import React, { useEffect } from "react";

const StripePricingTable: React.FC = () => {
  useEffect(() => {
    if (window.Stripe) {
      const stripe = window.Stripe(
        "pk_live_51PfVFkRqFdcOn0glKZ4r2G3I9zPa7WyIAZ9QnHmEuQ7rYD9iFq4P1PnTHe2FAjq3O9fbcK1oHNLUJQHoeCap0Y1m000aJjbz43"
      );
      stripe.pricingTable.create({
        pricingTableId: "prctbl_1PinyjRqFdcOn0glV2wjLqB9",
        element: "#stripe-pricing-table",
      });
    }
  }, []);

  return <div id="stripe-pricing-table"></div>;
};

export default StripePricingTable;
