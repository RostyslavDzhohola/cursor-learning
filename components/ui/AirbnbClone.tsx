"use client";

import * as React from "react";
import { Header } from "./Header";
import { SearchSection } from "./SearchSection";
import { PopularDestinations } from "./PopularDestinations";
import { Footer } from "./Footer";

export default function AirbnbClone() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-1">
        <SearchSection />
        <PopularDestinations />
      </main>
      <Footer />
    </div>
  );
}