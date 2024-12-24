import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className="py-28 lg:py-32 px-[100px]">
        <nav>
          <ul className="flex gap-[10px] font-Poppins text-[14px] leading-[20px] font-[400]">
            <Link to="/">
              <a href="#">Home</a>
            </Link>
            <p>/</p>
            <li>
              <a href="#">404 Error</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col px-[10px] lg:px-0 items-center justify-center gap-7 h-[calc(100vh - 130px)]">
        <h1 className="text-[60px] leading-[65px] lg:text-[110px] lg:leading-[115px] font-Inter text-[#000000]">
          404 Not Found
        </h1>
        <p className="text-[16px] leading-[24px] font-[400] font-Poppins text-[#000000]">
          Your visited page not found. You may go home page.
        </p>
        <button className="bg-[#DB4444] text-[16px] font-[500] leading-6 font-Poppins px-[48px] py-[16px] text-white rounded-[4px] hover:bg-[#963333]">
          <Link to="/">Back to home page</Link>
        </button>
      </div>
    </div>
  );
};
