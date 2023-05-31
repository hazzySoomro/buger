import React from 'react';
import buger4 from '../../public/buger4.png';
import Image from 'next/image';
import Ellipse from '../../public/Ellipse.png';

function Sectionfour() {
  return (
    <section className="m-20">
      <div className="bg-white shadow-slate-400 p-8 shadow-md flex justify-evenly ">
        <div className="">
          <p className="font-medium text-3xl text-gray-400">DISCOVER</p>
          <h1 className="font-bold text-gray-700 text-7xl ">UPCOMING EVENTS</h1>
          <p className="mt-5 font-bold text-gray-500 text-xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut .{' '}
          </p>
          <div className="flex space-x-2 mt-48">
            <Image src={Ellipse} alt="logo"></Image>
            <Image src={Ellipse} alt="logo"></Image>
            <Image src={Ellipse} alt="logo"></Image>
          </div>
        </div>
        <div>
          <Image src={buger4} alt="logo"></Image>
        </div>
      </div>
    </section>
  );
}

export default Sectionfour;
