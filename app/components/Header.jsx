'use client';
import Image from 'next/image';

import React from 'react';
import logo from '../../public/logo.png';
import Link from 'next/link';
import bike from '../../public/bike.png';

function Header() {
  return (
    <header className="p-2 flex justify-between bg-transparent ">
      <div className="">
        <Link href="/">
          <Image src={logo} alt="Burger" width={150} height={150}></Image>
        </Link>
      </div>
      <div className="flex justify-around">
        <Image src={bike} alt="logo"></Image>
        <p className="font-medium text-sm">Express Delivery</p>
        <a
          href="tel:+923312444229"
          className="font-medium rounded-2xl text-base"
        >
          +923312444229
        </a>
      </div>
    </header>
  );
}

export default Header;
