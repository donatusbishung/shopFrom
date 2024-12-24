import { IoIosHeartEmpty } from 'react-icons/io';
import { PiEyeLight } from 'react-icons/pi';
import { useEffect, useState } from 'react';
import block from '/block.svg';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../slices/cart/cartSlice';
import { AppDispatch, RootState } from '../../store/store';
import { notification } from 'antd';
import { addTowishlist } from '../../slices/wishlist/wishlistSlice';
import { fetchProducts } from '../../slices/product/productSlice';
import { Link } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';

export const BestSellingLayout: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.products);
  const { cart } = useSelector((state: RootState) => state.cart);
  const { wishlist } = useSelector((state: RootState) => state.wishlist);
  // const [clicked, setClicked] = useState(false);

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
    isEyeClicked?: boolean;
    isHeartClicked?: boolean;
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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

  const bestSellingProducts = products.filter(
    (product) => product.best_selling
  );

  const [cards, setCards] = useState(
    bestSellingProducts.map((card) => ({
      ...card,
      isHeartClicked: false,
      isEyeClicked: false,
    }))
  );

  const handleHeartClick = (item: Product, index: number) => {
    if (wishlist.some((e: any) => e.id === item.id)) {
      return;
    }

    setCards(
      cards.map((card, i) =>
        i === index ? { ...card, isHeartClicked: true } : card
      )
    );
    handleAddWishlist(item);
  };

  // const handleEyeClick = (index: number) => {
  //   setCards(
  //     cards.map((card, i) =>
  //       i === index ? { ...card, isEyeClicked: !card.isEyeClicked } : card
  //     )
  //   );
  // };

  return (
    <div className="px-[10px] lg:px-[100px] flex flex-col gap-5 mt-36">
      <div className="flex items-center gap-3">
        <img src={block} alt="block" />
        <p className="font-Poppins font-[600] text-[16px] leading-[20px] text-[#DB4444]">
          This Month
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-Inter font-[600] text-[20px] lg:text-[36px] leading-[48px]">
          Best Selling Products
        </h1>
        <button className="bg-[#DB4444] hidden lg:block rounded-[4px] lg:mb-7 px-[48px] py-[16px] font-Poppins text-[16px] leading-6 text-[#FAFAFA] hover:bg-[#e98b8b]">
          View All
        </button>
      </div>
      <div className="grid mx-auto gap-14 grid-cols-1 mt-7 md:grid-cols-2 lg:grid-cols-4">
        {bestSellingProducts.map((card: Product, i: number) => (
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
                  {card.isHeartClicked ? (
                    <div
                      onClick={(e) => {
                        handleHeartClick(card, i);
                        e.preventDefault();
                      }}
                    >
                      <IoIosHeartEmpty className="w-[24px] h-[24px] text-white" />
                    </div>
                  ) : (
                    <div
                      onClick={(e) => {
                        handleAddWishlist(card);
                        e.preventDefault();
                      }}
                    >
                      <IoIosHeartEmpty className="w-[24px] h-[24px] text-[#000000]" />
                    </div>
                  )}
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
      <button className="bg-[#DB4444] mx-auto mt-4 block lg:hidden rounded-[4px] lg:mb-7 px-[48px] py-[16px] font-Poppins text-[16px] leading-6 text-[#FAFAFA] duration-200 hover:bg-[#7e2626] hover:text-[#fffbfb]">
        View All
      </button>
    </div>
  );
};

export default BestSellingLayout;
