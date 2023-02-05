import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import cart from "../public/cart.svg";
import account from "../public/account.svg";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center shadow px-6 bg-white py-3 sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-1">
        <Image src={logo} alt="logo" width={35} height={45} />
        <p className="text-3xl font-bold text-[#A46E05]">KASUWA</p>
      </Link>
      <div className="flex items-center gap-4">
        <div className="flex gap-2 items-center cursor-pointer">
          <Image src={account} width={25} height={25} alt="account" />
          <span className="hidden md:flex">Account</span>
        </div>
        <Link href="/cart" className="flex gap-2 items-center">
          <Image src={cart} alt="cart" width={21} height={20} />
          <span className="hidden md:flex">Cart</span>
        </Link>
      </div>
    </nav>
  );
}
