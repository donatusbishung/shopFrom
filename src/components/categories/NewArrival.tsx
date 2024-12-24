import block from '/block.svg';
import playstation from '/ps5.png';
import women from '/women.png';
import speaker from '/speaker.png';
import perfume from '/perfume.png';

export const NewArrival: React.FC = () => {
  return (
    <div className="px-[10px] lg:px-[100px] flex flex-col gap-5 mb-10">
      <div className="flex items-center gap-3">
        <img src={block} alt="block" />
        <p className="font-Poppins font-[600] text-[16px] leading-[20px] text-[#DB4444]">
          Featured
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-Inter font-[600] text-[20px] lg:text-[36px] leading-[48px]">
          New Arrival
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-14">
        <div className={`bg-[#000000] p-10 text-white`}>
          <img src={playstation} alt="ps5" className="" />
          play station
        </div>
        <div className="flex flex-col gap-14">
          <div className="bg-[#000000] p-10 text-white">
            <img src={women} alt="women collection" />
            Women's collection
          </div>
          <div className="flex flex-col lg:flex-row gap-14">
            <div className="bg-[#000000] p-10 text-white">
              <img src={speaker} alt="speakers" />
              speakers
            </div>
            <div className="bg-[#000000] p-10 text-white">
              <img src={perfume} alt="perfume" />
              perfume
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
