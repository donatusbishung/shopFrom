import React from 'react';
import { AppDispatch, RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantity } from '../slices/cart/cartSlice';
import { MdOutlineClear } from 'react-icons/md';
import Footer from '../components/Footer';

export const Cart: React.FC = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleQuantityChange = (e: number, item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: e.target.value,
      })
    );
  };
  return (
    <div>
      <NavBar />
      <div className="py-28 px-[10px] lg:px-[100px] flex flex-col gap-10 mb-10">
        <div className=" ">
          <nav>
            <ul className="flex gap-[10px] font-Poppins text-[14px] leading-[20px] font-[400]">
              <Link to={'/'}>
                <a href="#">Home</a>
              </Link>
              <p>/</p>
              <li>
                <a href="#">Cart</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          {cart.length > 0 ? (
            <table className="table-auto w-full border-separate border-spacing-y-4">
              <thead>
                <tr>
                  <th className="px-4 font-Poppins font-[400] text-[16px] leading-6 py-6 text-left">
                    Product
                  </th>
                  <th className="px-4 font-Poppins font-[400] text-[16px] leading-6 py-6 text-left">
                    Price
                  </th>
                  <th className="px-4 font-Poppins font-[400] text-[16px] leading-6 py-6 text-left">
                    Quantity
                  </th>
                  <th className="px-4 font-Poppins font-[400] text-[16px] leading-6 py-6 text-left">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="bg-white shadow-md rounded-md">
                    <td className="px-4 font-Poppins font-[400] text-[16px] leading-6 py-4">
                      <div className="flex items-center">
                        <div className="relative flex">
                          <div
                            onClick={() => handleRemoveFromCart(item.id)}
                            className="absolute cursor-pointer rounded-full bg-[#DB4444] flex items-center p-1 text-white"
                          >
                            <MdOutlineClear />
                          </div>
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-[50px] h-[50px] mr-4"
                          />
                        </div>
                        <span className="hidden lg:block">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-4 font-Poppins font-[400] text-[16px] leading-6 py-4">
                      ${item.price}
                    </td>
                    <td className="px-4 font-Poppins font-[400] text-[16px] leading-6 py-4">
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) => handleQuantityChange(e, item)}
                        className="border border-gray-300 p-1 outline-none rounded w-[60px]"
                      />
                    </td>
                    <td className="px-4 font-Poppins font-[400] text-[16px] leading-6 py-4">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        {cart.length > 0 && (
          <div className="flex justify-between">
            <Link to={'/'}>
              <button className="border font-[500] font-Poppins text-[16px] leading-6 border-slate-600 p-4 rounded-[4px]">
                Return to Shop
              </button>
            </Link>
            <button className="border font-[500] font-Poppins text-[16px] leading-6 border-slate-600 p-4 rounded-[4px]">
              Update Cart
            </button>
          </div>
        )}
        {cart.length > 0 && (
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="flex flex-col lg:flex-row gap-3 justify-start lg:justify-center lg:items-center">
              <input
                type="text"
                placeholder="Add Coupon code"
                className="p-4 outline-none border  border-[#000000] rounded-[4px]"
              />
              <button className="bg-[#DB4444] font-[500] font-Poppins text-[16px] leading-6 text-white p-4 rounded-[4px]">
                Apply Coupon
              </button>
            </div>
            <div className="flex mt-10 rounded-[4px] lg:w-[470px] border border-slate-900 p-6 gap-6 flex-col">
              <h1 className="font-[500] text-[20px]">Cart Total</h1>
              <p className="flex items-center justify-between border-b border-black pb-4">
                Subtotal:
                <span>
                  $
                  {cart
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toFixed(2)}
                </span>
              </p>
              <p className="flex items-center justify-between border-b border-black pb-4">
                Free:
                <span>Free</span>
              </p>
              <p className="flex items-center justify-between border-b border-black pb-4">
                Total:{' '}
                <span>
                  $
                  {cart
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toFixed(2)}
                </span>
              </p>
              <Link
                to="viewcart/checkout"
                className="bg-[#DB4444] font-[500] self-center font-Poppins text-[16px] leading-6 text-white p-4 rounded-[4px]"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
