import React from 'react';
import block from '/block.svg';
import playstation from '/ps5.png';
import women from '/women.png';
import speaker from '/speaker.png';
import perfume from '/perfume.png';

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
}) => (
  <div className="relative overflow-hidden group p-20 h-full">
    <img
      src={imageSrc}
      alt={imageAlt}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
      <h2 className="text-xl font-bold text-white mb-1">{title}</h2>
      <p className="text-sm text-gray-300 mb-2">{description}</p>
      <span className="text-sm font-semibold text-white hover:underline cursor-pointer">
        Shop Now
      </span>
    </div>
  </div>
);

const ProductGrid: React.FC = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col gap-5">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Large Product Card */}
        <div className="bg-black text-white overflow-hidden">
          <ProductCard
            title="PlayStation 5"
            description="Experience next-gen gaming at its finest with the PS5"
            imageSrc={playstation}
            imageAlt="PlayStation 5"
          />
        </div>

        {/* Right Column Grid */}
        <div className="grid gap-4">
          {/* Women's Collections */}
          <div className="bg-[#0D0D0D] text-white overflow-hidden">
            <ProductCard
              title="Women's Collections"
              description="Find your perfect style"
              imageSrc={women}
              imageAlt="Women's Collections"
            />
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols lg:grid-cols-2 gap-4">
            {/* Speakers */}
            <div className="bg-[#1f1d1de5] text-white overflow-hidden">
              <ProductCard
                title="Speakers"
                description="Smart home speakers"
                imageSrc={speaker}
                imageAlt="Speakers"
              />
            </div>

            {/* Perfume */}
            <div className="bg-[#1f1d1de5] text-white overflow-hidden h-full">
              <ProductCard
                title="Perfume"
                description="Luxury fragrances"
                imageSrc={perfume}
                imageAlt="Perfume"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
