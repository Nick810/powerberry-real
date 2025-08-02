'use client';

import Hamburger from "hamburger-react"
import { FC, useState } from "react";
import MobileNav from "./mobilenav";
import Cart from "./cart";
import Link from "next/link";
import Image from "next/image";
import logo from '../../public/powerberry-logo.svg';
import cart from '../../public/cart.svg';


const Header: FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isCartOpen, setCartOpen] = useState<boolean>(false);
  
  return (
    <>
      <header className="container fixed w-screen bg-transparent py-2 z-10">
        <div className="absolute inset-0 bg-white/60 backdrop-blur-md -z-10"></div>
        <div className="flex items-center justify-between">
          <Link href="/" className="text-black">
            <Image src={logo} alt="Powerberry Logo" width={32} height={32} priority/>
          </Link>
          <div className="flex items-center gap-2">
            <button onClick={() => setCartOpen(true)} className="text-black cursor-pointer">
              <Image src={cart} alt="Cart Icon" width={40} height={40} priority />
            </button>
            <Hamburger toggled={isOpen} toggle={setOpen} size={28} color="#333" />
          </div>
        </div>
      </header>

      <Cart toggled={isCartOpen} toggle={setCartOpen} />
      <MobileNav toggled={isOpen} toggle={setOpen} />
      
    </>
  )
}
export default Header