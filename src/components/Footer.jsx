/* eslint-disable react/jsx-no-target-blank */
import DragonBallImg from '../assets/footerImg.png';

const Footer = () => {
  return (
    <div className="px-10  bg-[rgb(238,46,43)]">
      <div className="flex items-center justify-between">
        <div className="p-10">
          <h1 className="text-xl font-extrabold text-[#26577C] mb-4">Characters: <span className='text-[#FFCC70]'>58</span></h1>
          <h1 className="text-xl font-extrabold text-[#26577C]">Transformations: <span className='text-[#FFCC70]'>49</span></h1>
        </div>
        <a href='/'><img src={DragonBallImg} alt="Dragon Ball Image" width={200} height={180} className="px-10 py-4" /></a>
      </div>
      <hr className="border-t border-gray-300 border-dotted w-120 items-center" />
      <span className="block font-bold text-[#FFE4D6] text-center p-4 text-xl"><a href="https://github.com/akhilraaaj" target="_blank">&lt;&gt; by <span className='underline'>Akhil Raj</span></a></span>
    </div>
  );
};

export default Footer;
