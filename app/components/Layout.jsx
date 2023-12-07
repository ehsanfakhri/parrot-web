"use client";

// fonts
import { Sora } from "next/font/google";

//font settings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// components
import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";
import Transition from "../components/Transition";

// next navigation
import { usePathname } from "next/navigation";

// framer motion
import { AnimatePresence, motion } from "framer-motion";

export default function Layout({ children }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.className} font-sora relative`}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      <AnimatePresence mode="wait">
        <motion.div key={true} className="h-full">
          <Transition />
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
