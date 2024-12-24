import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import visa from '/visa.png';
import bkash from '/bkash.png';
import mastercard from '/mastercard.png';
import nagad from '/Nagad.png';

export const ProceedtoCheckout: React.FC = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  return (
    <div className="mb-10">
      <div className="flex flex-col gap-5">
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-start mb-7 lg:w-4/5"
          >
            <div className="flex gap-4 items-center">
              <img
                src={item.img}
                alt={item.name}
                className="w-[50px] h-[50px]"
              />
              <p className="font-[400] text-[16px] leading-6">{item.name}</p>
              <div className="ml-auto">
                <p className="font-Poppins font-[400] text-[16px] leading-6">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="flex mt-10 gap-6 flex-col lg:w-4/5">
          <p className="flex items-center justify-between border-b border-slate-500 pb-4">
            Subtotal:
            <span>
              $
              {cart
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </p>
          <p className="flex items-center justify-between border-b border-slate-500 pb-4">
            Free:
            <span>Free</span>
          </p>
          <p className="flex items-center justify-between pb-4">
            Total:
            <span>
              $
              {cart
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </p>
        </div>
        <form className="flex flex-col gap-3 lg:w-4/5 mb-5">
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <input type="radio" name="payment" />
              <label htmlFor="">Bank</label>
            </div>
            <div className="flex items-center gap-2">
              <img src={bkash} alt="bkash" />
              <img src={visa} alt="visa" />
              <img src={mastercard} alt="mastercard" />
              <img src={nagad} alt="nagad" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <input type="radio" name="payment" />
            <label htmlFor="">Cash on Delivery</label>
          </div>
        </form>
        <div className="flex flex-col w-full lg:flex-row gap-5">
          <input
            type="text"
            placeholder="Add Coupon code"
            className="p-4 outline-none border  border-[#000000] rounded-[4px]"
          />
          <button className="bg-[#DB4444] font-[500] font-Poppins text-[16px] leading-6 text-white p-4 rounded-[4px]">
            Apply Coupon
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProceedtoCheckout;
