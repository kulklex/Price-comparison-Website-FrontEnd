
import Image from "next/image";
import "./globals.css";

export default function Home() {

  const brandCard =
    "h-16 w-24 border rounded hover:bg-opacity-40 hover:-translate-y-1 transition-all cursor-pointer duration-500";

  return (
    <div className="pb-8 pt-4">
      <section className="grid md:flex justify-center items-center py-2 lg:pb-8">
      <div className="relative grid pt-8">
          <div className="px-2 pt-10 text-gray-800">
            <h1 className="capitalize italic md:text-xl lg:text-3xl lg:leading-[120%] py-1">
              Find the perfect earbuds for you
            </h1>
            <small className="text-light text-xs md:text-base py-1">
              Search across major online stores
            </small>
          </div>
          
          <Image
            src="/people.jpg"
            alt="banner"
            className="md:w-[80%] md:h-[75%]"
            width={750}
            height={700}
          />
        </div>
        
        <div className="pt-8">
          <div className="flex justify-center items-center text-lg md:text-2xl py-1">
            From Popular Brands
          </div>
          <div className="grid md:grid-cols-4 justify-center items-center text-lg pb-2">
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
