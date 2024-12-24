import { ServiceCard } from '../ServiceCard';

export default function AboutLayout1() {
  return (
    <div className="px-[10px] lg:px-[100px] mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
        {ServiceCard.map((card, i) => (
          <div
            key={i}
            className={`flex flex-col justify-center cursor-pointer items-center gap-6 border p-5 hover:bg-[#DB4444] hover:text-white duration-200 ${
              card.active ? 'bg-[#DB4444] text-white' : ''
            }`}
          >
            <img src={card.img} alt="" />
            <div className="font-Poppins text-center">
              <h1 className="font-[700] text-[32px] mb-3 leading-[30px]]">
                {card.header}
              </h1>
              <p
                className={`font-[400] text-[16px] leading-6 ${
                  card.active ? 'text-white' : ''
                }`}
              >
                {card.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
