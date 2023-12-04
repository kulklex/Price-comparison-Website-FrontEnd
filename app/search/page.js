import SearchCard from '@/components/SearchCard'
import React from 'react'

export default function page() {
  return (
    <div className="w-full">
      <h1 className="flex justify-center items-center text-center p-2 bold">
        Here are your search results for: SearchTerm
      </h1>
      <div className="">
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
      </div>
    </div>
  )
}
