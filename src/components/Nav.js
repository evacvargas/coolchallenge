import React from "react";
import Image from "next/image";

const Nav = () => {
  return (
  <div className="fixed top-0 left-0 w-full h-28 p-9 z-[100] bg-background">
      <div className="flex justify-between">
        <div>
          <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="logo"
          />
        </div>
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