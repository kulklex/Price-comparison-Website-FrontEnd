import React from 'react'
import Image from 'next/image'

export default function SearchCard() {
  return (
    <div className='p-4 m-4 flex border border-gray-100 rounded-lg'>
        <div className="block md:flex justify-between space-x-2 space-y-2">
            <Image 
                src='/people.jpg'
                alt='banner'
                className='md:w-[80%] md:h-[80%] p-1 m-1 rounded'
                width={200}
                height={200}
            />
        
            <div>
                <h4 className="py-1">
                    Brand
                </h4>
                <p className="text-sm md:text-normal">
                    Name
                </p>
                <p className="pt-12">
                    Price
                </p>
            </div>
        </div>
    </div>
  )
}
