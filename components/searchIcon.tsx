import Image from "next/image";
import search from "../public/search.svg";
export default function SearchIcon() {
  return (
    <>
      <Image
        src={search}
        width={25}
        height={20}
        alt="search"
        className="cursor-pointer"
      />
    </>
  );
}
