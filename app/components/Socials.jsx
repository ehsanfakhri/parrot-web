// links
import Link from "next/link";

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiBehanceLine,
  RiPingPongLine,
} from "react-icons/ri";

export default function Socials() {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={""} className="hover:text-accent transition-all duration-300">
    <RiYoutubeLine />
    </Link>
    <Link href={""} className="hover:text-accent transition-all duration-300">
    <RiInstagramLine />
    </Link>
    <Link href={""} className="hover:text-accent transition-all duration-300">
    <RiFacebookBoxLine />
    </Link>
    <Link href={""} className="hover:text-accent transition-all duration-300">
    <RiBehanceLine />
    </Link>
    <Link href={""} className="hover:text-accent transition-all duration-300">
    <RiPingPongLine />
    </Link>
  </div>;
}
