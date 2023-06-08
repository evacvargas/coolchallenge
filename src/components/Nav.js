import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
  <div className="h-28 p-9 bg-white w-full">
      <div className="flex justify-between">
        <Link href={"/"}>
        <Image
        src="/logo.png"
        alt="Logo"
        width={100}
        height={100}
        style={{ width: "50px", height: "auto" }} />
        </Link>
        <div className="flex gap-9 text-primary font-semibold items-center">
          <p className="hover:text-secondary cursor-pointer">Home</p>
          <p className="hover:text-secondary cursor-pointer">About</p>
          <p className="hover:text-secondary cursor-pointer">Blog</p>
        </div>
      </div>
  </div>
  );
}
  
  export default Nav;