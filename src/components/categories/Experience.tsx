import jbl from '/jbl.png';

export const Experience: React.FC = () => {
  return (
    <div className="px-[10px] lg:px-[100px] flex flex-col mt-10 lg:mt-0 gap-4">
      <div className="bg-black text-white p-6 lg:p-20 flex items-center">
        <div className="flex flex-col gap-10">
          <h2 className="font-[600] text-[16px] leading-5 text-[#00FF66]">
            Categories
          </h2>
          <h1 className="font-600] text-[48px] text-[#FAFAFA] leading-[60px]">
            Enhance Your Music Experience
          </h1>
          <div className="flex gap-4 justify-start items-center">
            <span className="p-3 lg:p-4 rounded-full bg-white text-black text-center">
              12 <br />
              Hours
            </span>
            <span className="p-3 lg:p-4 rounded-full bg-white text-black text-center">
              12 <br />
              Hours
            </span>
            <span className="p-3 lg:p-4 rounded-full bg-white text-black text-center">
              12 <br />
              Hours
            </span>
            <span className="p-3 lg:p-4 rounded-full bg-white text-black text-center">
              12 <br />
              Hours
            </span>
          </div>
          <button className="bg-[#00FF66] rounded-[4px] py-4 px-12 lg:w-1/3">
            Buy Now
          </button>
        </div>
        <div className="hidden lg:block rounded-full ">
          <img src={jbl} alt="speaker" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
