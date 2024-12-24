import React from 'react';
import { AppDispatch, RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../slices/cart/cartSlice';
import { removeFromWishlist } from '../slices/wishlist/wishlistSlice';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoCartOutline } from 'react-icons/io5';
import { notification } from 'antd';

export const Wishlist: React.FC = () => {
  const { wishlist, isPresentWishlist } = useSelector(
    (state: RootState) => state.wishlist
  );
  const { cart } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  interface Product {
    id: string;
    name: string;
    prevPrice: number;
    discount: boolean;
    flashSale: boolean;
    quantity: number;
    price: number;
    img: string;
    star: string;
    span: string;
    isEyeClicked?: boolean; // Optional
  }

  const handleAddToCart = (item: Product) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      notification.warning({
        message: 'Item Added to Cart',
        duration: 1,
        placement: 'topRight',
        className: 'rounded-lg',
      });
    } else {
      dispatch(addToCart(item));
    }
  };

  const handleRemoveFromWishlist = (id: string) => {
    dispatch(removeFromWishlist(id));
  };
  return (
    <div>
      <NavBar />
      <div className="py-28 px-[10px] lg:px-[100px] flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h1>Wishlist ({wishlist.length})</h1>
          <button className="border border-slate-600 p-4 rounded-[4px]">
            Move All To Bag
          </button>
        </div>
        <div className="grid mx-auto gap-14 grid-cols-1 mt-7 md:grid-cols-2 lg:grid-cols-4">
          {isPresentWishlist &&
            wishlist.map((item: Product, i: number) => (
              <div key={i} className="flex flex-col justify-center gap-4">
                <div className="bg-[#F5F5F5] flex items-center cursor-pointer p-8 w-[270px] h-[250px] relative">
                  {item.discount ? (
                    <div className="bg-[#DB4444] self-start absolute left-4 -top-[-20px] px-[16px] py-[4px] rounded-[4px] font-Poppins font-[400] text-[12px] leading-[18px] text-[#FAFAFA]">
                      <p>-40%</p>
                    </div>
                  ) : (
                    ''
                  )}
                  <img
                    src={item.img}
                    alt="game pad"
                    className={`self-center`}
                  />
                  <div className="absolute flex flex-col gap-3 p-2 left-[210px] -top-[0.4px]">
                    <div
                      onClick={() => handleRemoveFromWishlist(item.id)}
                      className={`rounded-full p-2 cursor-pointer `}
                    >
                      <RiDeleteBin6Line className={`w-[24px] h-[24px]`} />
                    </div>
                  </div>
                  <div
                    onClick={() => handleAddToCart(item)}
                    className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 h-10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                  >
                    <p className="text-white text-[16px] inline-flex items-center gap-3">
                      <span>
                        <IoCartOutline className="w-[24px] h-[24px]" />
                      </span>
                      Add to Cart
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-Poppins font-[500] text-[16px] leading-6">
                    {item.name}
                  </h3>
                  <div className="flex justify-start items-center font-[500] font-Poppins text-[16px] leading-6 gap-3">
                    <p className="text-[#DB4444]">${item.price}</p>
                    <p className="line-through text-[#000000] opacity-[50%]">
                      ${item.prevPrice}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          {!isPresentWishlist && <p className="">Your wishlist is empty.</p>}
        </div>
        {wishlist.length > 0 && <p>Related Items here...</p>}
      </div>
      <Footer />
    </div>
  );
};
