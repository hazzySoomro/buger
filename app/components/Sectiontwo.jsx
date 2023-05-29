import Image from 'next/image';
import React from 'react';
import buger2 from '../../public/buger2.png';
import burger1 from '../../public/burger1.png';

function Sectiontwo() {
  return (
    <section className="flex justify-between min-h-screen items-center">
      <div className=" items-center justify-center ml-52 relative">
        <Image src={burger1} className=" "></Image>
        <h1 className="font-sm text-white text-2xl absolute top-0 z-[99999] ">
          try it NOW !
        </h1>
      </div>
      <div className="mr-52">
        <div className="relative mb-2 ">
          <Image src={buger2} className=" "></Image>
          <h2 className="font-sm text-white text-xl absolute top-10 ml-4 ">
            try it NOW !
          </h2>
          <h1 className="font-sm text-white text-2xl absolute top-20 ml-4 ">
            MORE FUN
          </h1>
          <h1 className="font-sm text-white text-2xl absolute top-15 ml-4 z-[999]">
            MORE TASTE
          </h1>
        </div>
        <div className="relative mb-10 ">
          <Image src={buger2} className=" "></Image>
          <h1 className="font-sm text-white text-2xl absolute top-20 ml-4 ">
            try it NOW !
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Sectiontwo;
