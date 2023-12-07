// next image
import Image from "next/image";

export default function Avatar() {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/avatar1.png"}
        width={600}
        height={600}
        alt=""
        className="translate-z-0"
      />
    </div>
  );
}
