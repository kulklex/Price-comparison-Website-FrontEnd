import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="block md:flex justify-around items-center px-8 py-2 mt-4">
      <div id="nav" className="px-2 space-x-4 hidden md:block tex-light">
                <Link href="/" className="text-sm md:text-lg bold">Home</Link>
                <Link href="/about-us" className="text-sm md:text-lg bold">About Us</Link>
                <Link href="/contact-us" className="text-sm md:text-lg bold">Contact Us</Link>
      </div>
      <div className="bold text-2xl flex justify-around items-center pb-4">
            BudSpot
      </div>
      <div className="">
          <input type="search" placeholder="Search" 
          className="block w-full rounded-md border border-gray-200 bg-white py-2.5 font-satoshi pl-5 pr-12 text-sm font-medium focus:border-black focus:outline-none focus:ring-0"/>
      </div>
    </div>
  )
}
