import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export const Product: React.FC = () => {
  const { name } = useParams();
  return (
    <div>
      <NavBar />
      <div className="px-[10px] py-32 lg:px-[100px] flex flex-col gap-5 mb-10">
        <h1>Product: {name}</h1>
      </div>
      <Footer />
    </div>
  );
};
export default Product;
