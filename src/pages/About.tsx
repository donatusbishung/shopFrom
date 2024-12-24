import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import sideImage from '/Side-Image.png';
import AboutLayout1 from '../components/Layouts/AboutLayout1';

export const About: React.FC = () => {
  return (
    <div className="">
      <NavBar />
      <div>
        <div className="py-28 lg:py-32 px-[100px]  flex items-center gap-3 font-[400] text-[14px] leading-[21px] pt-24">
          <Link to="/">Home</Link>
          <span>/</span>
          <p>About</p>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:gap-16 mb-28">
          <div className="flex flex-col justify-center gap-6 pl-[10px] text-justify px-[10px] lg:pl-[100px] mb-6 lg:mb-0">
            <h1 className="font-Inter font-[600] text-[24px] text-[#000000] leading-[64px] lg:text-[54px]">
              Our Story
            </h1>
            <p className="font-Poppins font-[400] text-[16px] text-[#000000] leading-[24px]">
              Launced in 2015, Exclusive is South Asia&apos;s premier online
              shopping makterplace with an active presense in Bangladesh.
              Supported by wide range of tailored marketing, data and service
              solutions, Exclusive has 10,500 sallers and 300 brands and serves
              3 millioons customers across the region.
            </p>
            <p className="font-Poppins font-[400] text-[16px] text-[#000000] leading-[24px]">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <img
            src={sideImage}
            alt="side image"
            className="px-[10px] mx-auto lg:px-0"
          />
        </div>
        <AboutLayout1 />
      </div>
      <Footer />
    </div>
  );
};
