import React from 'react'
import Image from 'next/image'
import axios from 'axios'

export default function ProductItem() {
  return (<div>
    <div className="p-4 m-4 block md:flex border border-gray-100 rounded-lg">
      <Image 
        src='/people.jpg'
        alt='banner'
        className='md:w-[40%] md:h-[40%] p-1 m-1 rounded-lg'
        width={200}
        height={200}
      />
      <div>
        <h1>
          Name
        </h1>
        <p>
          Brand
        </p>
        <p>
          Description
        </p>
      </div>
    </div>
    
    <div>
      <p>Available on</p>
      <ul>
        
      </ul>
    </div>
  </div>)
}
