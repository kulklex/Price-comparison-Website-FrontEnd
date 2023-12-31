import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

//Default function receiving props
export default function SearchCard({id, imageUrl, name, brand}) {
  return (
    <Link href={`/product/${id}`} className='px-4 py-6 m-4 flex border border-gray-100 rounded-lg shadow-md'>
        <div className="block md:flex justify-between space-x-2 space-y-2">
            <Image 
                src={imageUrl}
                alt='product-img'
                className='p-1 m-1 rounded'
                width={200}
                height={200}
            />
        
            <div>
                <h2 className="py-2 text-xl">
                   {name}
                </h2>
                <div className="text-sm md:text-normal pt-2 flex">
                   Brand: <b className='pl-1'>{brand}</b>
                </div>
            </div>
        </div>
    </Link>
  )
}
