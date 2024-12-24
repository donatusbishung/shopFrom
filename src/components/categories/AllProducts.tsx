import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchProducts } from '../../slices/product/productSlice';
import { addToCart } from '../../slices/cart/cartSlice';
import block from '/block.svg';
import arrowLeft from '/arrow-left.png';
import arrowRight from '/Arrow-right.png';
import { PiEyeLight } from 'react-icons/pi';
import { IoIosHeartEmpty } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { addTowishlist } from '../../slices/wishlist/wishlistSlice';
import { IoCartOutline } from 'react-icons/io5';
import { notification } from 'antd';
import { Link } from 'react-router-dom';

export const AllProducts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.products);
  const { cart } = useSelector((state: RootState) => state.cart);
  const { wishlist } = useSelector((state: RootState) => state.wishlist);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  interface Product {
    id: string;
    name: string;
    prevPrice: number;
    discount: boolean;
    flashSale: boolean;
    quantity: number;
    price: number;
    img: string;
    isNew: boolean;
    star: string;
    span: string;
    isEyeClicked?: boolean; // Optional
  }

  // const [isHeartClicked, setIsHeartClicked] = useState(false);
  // const handleHeartClick = () => {
  //   setIsHeartClicked(!isHeartClicked);
  // };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddWishlist = (item: Product) => {
    const existingItem = wishlist.find((wishItem) => wishItem.id === item.id);
    if (existingItem) {
      notification.warning({
        message: 'Item Already in Wishlist',
        duration: 1,
        placement: 'topRight',
        className: 'rounded-lg',
      });
    } else {
      dispatch(addTowishlist(item));
    }
  };

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

  return (
    <div className="px-[10px] lg:px-[100px] flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <img src={block} alt="block" />
        <p className="font-Poppins font-[600] text-[16px] leading-[20px] text-[#DB4444]">
          Our Products
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-Inter font-[600] text-[20px] lg:text-[36px] leading-[48px]">
          Explore Our Products
        </h1>
        <div className="flex items-center gap-3">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <img
              src={arrowLeft}
              alt="navigation"
              className={`cursor-pointer`}
            />
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(products.length / productsPerPage)
            }
          >
            <img
              src={arrowRight}
              alt="navigation"
              className={`cursor-pointer`}
            />
          </button>
        </div>
      </div>
      <div className="grid mx-auto gap-14 grid-cols-1 mt-7 md:grid-cols-2 lg:grid-cols-4">
        {currentProducts.map((card: Product, i: number) => (
          <Link
            to={`/product/${card.name}`}
            // onClick={() => navigate(`/product/${card.name}`)}
            key={i}
            className="flex flex-col justify-center gap-4"
          >
            {/* image section */}
            <div className="bg-[#F5F5F5] flex items-center cursor-pointer p-8 w-[270px] h-[250px] relative">
              {card.isNew ? (
                <div className="bg-[#00FF66] self-start absolute left-4 -top-[-20px] px-[16px] py-[4px] rounded-[4px] font-Poppins font-[400] text-[12px] leading-[18px] text-[#FAFAFA]">
                  <p>NEW</p>
                </div>
              ) : (
                ''
              )}
              <img src={card.img} alt="game pad" className={`self-center`} />
              <div className="absolute flex flex-col gap-3 p-2 left-[210px] -top-[0.4px]">
                <div
                  className={`rounded-full p-2 cursor-pointer `}
                  //   onClick={() => handleHeartClick(i, card)}
                >
                  <div
                    onClick={(e) => {
                      handleAddWishlist(card);
                      e.preventDefault();
                    }}
                  >
                    <IoIosHeartEmpty className="w-[24px] h-[24px] text-[#000000]" />
                  </div>
                </div>
                <div
                  className={`rounded-full p-2 cursor-pointer duration-200 `}
                  //   onClick={() => handleEyeClick(i)}
                >
                  <PiEyeLight
                    className={`w-[24px] h-[24px] ${
                      card.isEyeClicked ? 'text-white' : 'text-[#000000]'
                    }`}
                  />
                </div>
              </div>
              {/* Add to Cart pop-up */}
              <div
                onClick={(e) => {
                  handleAddToCart(card);
                  e.preventDefault();
                }}
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
                {card.name}
              </h3>
              <div className="flex justify-start items-center gap-3">
                <p className="text-[#DB4444]">${card.price}</p>
                <img src={card.star} alt="star" />
                <p className="text-[#000000] opacity-[50%] text-[16px] leading-6">
                  {card.span}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="bg-[#DB4444] flex justify-center mt-14 rounded-[4px] lg:mb-7 px-[48px] py-[16px] font-Poppins text-[16px] leading-6 text-[#FAFAFA] hover:bg-[#e98b8b]">
          View All Products
        </button>
      </div>
    </div>
  );
};
export default AllProducts;
