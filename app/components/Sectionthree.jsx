import React from 'react';
import burger3 from '../../public/burger3.png';
import Link from 'next/link';
import Image from 'next/image';

function Sectionthree() {
  return (
    <section className="">
      <div>
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-5xl font-bold flex justify-center  bg-cover">
          ALWAYS TASTY BURGER
        </p>
        <h1 className="items-center text-9xl font-black  flex justify-center">
          Choose & Enjoy
        </h1>
        <p className="text-3xl font-medium items-center text-center pt-10  flex justify-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.{' '}
        </p>
      </div>
      <div className="flex justify-center items-center pt-40">
        <Link href="/">
          <div className="">
            <Image src={burger3} alt="logo"></Image>
            <h1 className=" justify-center flex font-semibold text-gray-700 text-2xl ">
              Lorem ipsum dolor
            </h1>
            <p className="text-md font-medium items-center text-center flex justify-center truncate">
              Lorem ipsum dolor sit amet,{' '}
            </p>
            <button className="bg-[#FFC751] p-3 rounded-md font-medium text-lg">
              BUY NOW
            </button>
          </div>
        </Link>
        <Link href="/">
          <div className="">
            <Image src={burger3} alt="logo"></Image>
            <h1 className=" justify-center flex font-semibold text-gray-700 text-2xl ">
              Lorem ipsum dolor
            </h1>
            <p className="text-md font-medium items-center text-center flex justify-center truncate">
              Lorem ipsum dolor sit amet,{' '}
            </p>
            <button className="bg-[#FFC751] p-3 rounded-md font-medium text-lg">
              BUY NOW
            </button>
          </div>
        </Link>
        <Link href="/">
          <div className="">
            <Image src={burger3} alt="logo"></Image>
            <h1 className=" justify-center flex font-semibold text-gray-700 text-2xl ">
              Lorem ipsum dolor
            </h1>
            <p className="text-md font-medium items-center text-center flex justify-center truncate">
              Lorem ipsum dolor sit amet,{' '}
            </p>
            <button className="bg-[#FFC751] p-3 rounded-md font-medium text-lg">
              BUY NOW
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Sectionthree;
