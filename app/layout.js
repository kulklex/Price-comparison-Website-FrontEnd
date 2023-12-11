import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "BudSpot",
  description: "Price Comparison Website for earbuds",
  keywords: ["earbuds", "headphones", "earphones", "price comparison"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white w-full">
          <Navbar />
          {children}
      </body>
    </html>
  );
}
