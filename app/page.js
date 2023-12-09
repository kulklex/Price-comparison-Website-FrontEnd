"use client";

import Image from "next/image";
import "./globals.css";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `/search?q=${encodeURIComponent(searchTerm)}&numitems=10&offset=20`
      );
      const data = await response.json();

      // Handle the data (update state, render results, etc.)
      console.log(data.searchResults);
    } catch (error) {
      console.error("Error during search", error);
      // Handle the error (show an error message, etc.)
    }
  };

  const brandCard =
    "h-16 w-24 border rounded hover:bg-opacity-40 hover:-translate-y-1 transition-all cursor-pointer duration-500";

  return (
    <div className="pb-8 pt-4">
      <section className="grid md:flex justify-between items-center px-8 md:px-24 py-2 lg:pb-8 space-x-2 md:space-x-8">
      <div className="relative flex justify-center pt-8">
          <Image
            src="/people.jpg"
            alt="banner"
            className="md:w-[80%] md:h-[75%]"
            width={750}
            height={700}
          />

          <div className="absolute px-2 pt-10 text-gray-800">
            <h1 className="capitalize  md:text-2xl lg:text-4xl leading-[120%] py-1">
              Find the perfect earbuds for you
            </h1>
            <small className="text-light text-xs md:text-base py-1">
              Search across major online stores
            </small>
          </div>
        </div>
        
        <div className="pt-8">
          <div className="flex justify-center items-center text-lg md:text-2xl py-2">
            From Popular Brands
          </div>
          <div className="grid grid-cols-4 justify-center items-center text-lg pb-2">
            <button className={`${brandCard} p-4 m-4`}>Apple</button>
            <button className={`${brandCard} p-2 m-4`}>Samsung</button>
            <button className={`${brandCard} p-4 m-4`}>Sony</button>
            <button className={`${brandCard} p-4 m-4`}>Beats</button>
            <button className={`${brandCard} p-4 m-4`}>Jbl</button>
            <button className={`${brandCard} p-4 m-4`}>Bose</button>
            <button className={`${brandCard} p-4 m-4`}>Bose</button>
            <button className={`${brandCard} p-4 m-4`}>Bose</button>
            <button className={`${brandCard} p-4 m-4`}>Bose</button>
            <button className={`${brandCard} p-4 m-4`}>Bose</button>
            <button className={`${brandCard} p-4 m-4`}>Bose</button>
          </div>
        </div>
      </section>
    </div>
  );
}
