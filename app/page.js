import Image from 'next/image'
import "./globals.css"



export default function Home() {

  const brandCard = 'h-16 w-24 border rounded p-2 m-2 hover:bg-opacity-40 hover:-translate-y-1 transition-all cursor-pointer duration-500'

  return (<div className="pb-8 pt-4">
    <section className='relative flex justify-center items-center px-8 py-2 lg:pb-8 space-x-2'>
      <Image
          src='/people.jpg'
          alt='banner'
          className='md:w-[75%] md:h-[80%]'
          width={750}
          height={700}
        />
        <div className='absolute text-white px-2'>
            <span className="capitalize text-normal md:text-2xl lg:text-4xl leading-[120%]">
              Find the perfect earbuds for you
            </span>
            <p className="text-light text-xs md:text-base">
              Search across major stores all at once
            </p>
        </div>
    </section>

    <section>
      <div className="flex justify-center items-center text-lg md:text-2xl py-2 italic">
        From Popular Brands
      </div>
      <div className="grid lg:flex justify-center items-center text-lg space-x-2 pb-2">
        <button className={brandCard}>
          Apple
        </button>
        <button className={brandCard}>
          Samsung
        </button>
        <button className={brandCard}>
          Sony
        </button>
        <button className={brandCard}>
          Beats
        </button>
        <button className={brandCard}>
          Jbl
        </button>
        <button className={brandCard}>
          Bose
        </button>
      </div>
    </section>
  </div>
  )
}
