import arrowRight from '/Arrow-right.png';
import arrowLeft from '/arrow-left.png';
import block from '/block.svg';
import { IoHeadsetOutline, IoPhonePortraitOutline } from 'react-icons/io5';
import { BsSmartwatch } from 'react-icons/bs';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { VscGame } from 'react-icons/vsc';
import { CiCamera } from 'react-icons/ci';

const categories = [
  {
    img: <IoPhonePortraitOutline className="w-[56px] h-[56px]" />,
    name: 'Phones',
  },
  {
    img: <HiOutlineComputerDesktop className="w-[56px] h-[56px]" />,
    name: 'Computers',
  },
  { img: <BsSmartwatch className="w-[56px] h-[56px]" />, name: 'SmartWatch' },
  {
    img: <CiCamera className="w-[56px] h-[56px]" />,
    name: 'Camera',
    isActive: true,
  },
  { img: <IoHeadsetOutline className="w-[56px] h-[56px]" />, name: 'HeadSet' },
  { img: <VscGame className="w-[56px] h-[56px]" />, name: 'Gaming' },
];

export const Catergories: React.FC = () => {
  return (
    <div className="px-[10px] lg:px-[100px] flex flex-col mt-10 lg:mt-0 gap-4">
      <div className="flex items-center gap-3">
        <img src={block} alt="block" />
        <p className="font-Poppins font-[600] text-[16px] leading-[20px] text-[#DB4444]">
          Catergories
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-Inter font-[600] text-[20px] lg:text-[36px] leading-[48px]">
          Browse By Category
        </h1>
        <div className="flex items-center gap-3">
          <img src={arrowLeft} alt="navigation" className="cursor-pointer" />
          <img src={arrowRight} alt="navigation" className="cursor-pointer" />
        </div>
      </div>
      <div className="grid grid-cols-1 px-[20px] md:px-0 lg:px-0 md:grid-cols-3 md:gap-4 lg:grid-cols-6 gap-3 mt-10">
        {categories.map((card, i) => (
          <div
            key={i}
            className={`border p-9 flex flex-col items-center gap-3 duration-200 rounded-[4px] hover:bg-[#DB4444] hover:text-white ${
              card.isActive ? 'bg-[#DB4444] text-white' : ''
            }`}
          >
            {card.img}
            <p className="font-Poppins text-[16px] leading-[24px]">
              {card.name}
            </p>
          </div>
        ))}
      </div>
      <div className="border-b border-slate-200 pt-10 hidden lg:block"></div>
    </div>
  );
};

export default Catergories;
