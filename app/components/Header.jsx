// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "./Socials";

export default function Header() {
  return (
    <header className="absolute  z-30 w-full flex items-center ox-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex  flex-col xl:flex-row justify-between items-center py-8 gap-4">
          {/* logo */}
          <Link href={"/"}>
            <Image
              className="   "
              src={"/Patrrot-Final-02.png"}
              width={220}
              height={48}
              alt=""
              priority={true}
            />
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
}
