import Image from 'next/image';
import hero from '../../public/hero-img.png';

function Sectionone() {
  return (
    <section className="bg-[#FFC751] flex justify-between min-h-full items-center ">
      <div className="p-8">
        <p className="font-semibold text-gray-700 text-xl border-dashed border-2 border-sky-700 items-center justify-center flex">
          ITS A GOOD TIME FOR GREATE TASTE OF BUGER
        </p>
        <h1 className="font-black text-gray-700 text-9xl">BURGER</h1>
        <h2 className="font-black text-gray-700 text-6xl">WEEK</h2>
      </div>
      <div>
        <Image
          src={hero}
          className="animate-bounce duration-1000"
          alt="logo"
        ></Image>
      </div>
    </section>
  );
}

export default Sectionone;
