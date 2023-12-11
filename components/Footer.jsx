import React from 'react'

export default function Footer() {
  const brandCard =
    "h-16 w-24 border rounded hover:bg-opacity-40 hover:-translate-y-1 transition-all cursor-pointer duration-500";

  return (<div>
    <div className='flex items-center justify-center py-4 bg-black absolute w-screen'>
        <p className='font-sans capitalize font-normal text-[0.75rem] md:text-base text-white'>
            copyright @2023 BudSpot allrights reserved
        </p>
    </div>


<section className="relative grid md:flex px-8 py-2 pt-2 lg:pb-8 space-x-2">
<div className="">
  <div className="flex flex-col py-2 md:pb-4">
    <h1 className="capitalize text-normal md:text-2xl lg:text-3xl leading-[120%]">
      From Popular Brands
    </h1>
    <small>
      At BudSpot you can compare prices of ear buds from different
      websites
    </small>
  </div>
  <div className="grid lg:flex text-lg pb-2">
    <button className={`${brandCard} py-2 my-2 pr-2 mr-2`}>
      Apple
    </button>
    <button className={`${brandCard} p-2 m-2`}>Samsung</button>
    <button className={`${brandCard} p-2 m-2`}>Sony</button>
    <button className={`${brandCard} p-2 m-2`}>Beats</button>
    <button className={`${brandCard} p-2 m-2`}>Bose</button>
  </div>
</div>
</section>
 </div> )
}
