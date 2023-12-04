import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'



export const metadata = {
  title: 'BudSpot',
  description: 'Price Comparison Website for earbuds',
  keywords: ['earbuds', 'headphones', 'earphones', 'price comparison'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white w-full">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
