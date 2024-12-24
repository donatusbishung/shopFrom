import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import {
  CiSearch,
  CiHeart,
  CiLogout,
  CiStar,
  CiGift,
  CiUser,
} from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { TiDeleteOutline } from 'react-icons/ti';
import { PiUserLight } from 'react-icons/pi';
import { MdOutlineClear } from 'react-icons/md';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
// import { cartSlice } from '../slices/cart/cartSlice';
import { AppDispatch, RootState } from '../store/store';
import { logOut } from '../slices/Auth/authSlice';

function NavBar() {
  const { cart } = useSelector((state: RootState) => state.cart);
  const { wishlist } = useSelector((state: RootState) => state.wishlist);
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  // useEffect(()=> {
  //   // Check if user is logged in
  //   const loggedInUser = getFromLocalStorage('loggedInUser');
  //   if (loggedInUser) {
  //     // If logged in, update user details
  //   }
  // }, [])

  const handleUserClick = () => {
    setUserMenuOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div
      className={`flex justify-between lg:items-center py-[20px] border-b border-gray-300 drop-shadow-md lg:px-[100px] lg:flex-row fixed left-0 right-0 bg-white mb-10 z-10`}
    >
      {/* Logo and Menu Button */}
      <div className="flex items-center">
        <button
          className="p-2 lg:hidden lg:p-0"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <MdOutlineClear className="w-[32px] h-[32px]" />
          ) : (
            <HiOutlineMenuAlt3 className="w-[32px] h-[32px]" />
          )}
        </button>
        <h1 className="font-[700] text-[24px] leading-6">ShopFrom</h1>
      </div>

      {/* Desktop Menu */}
      <div
        className={`hidden lg:flex gap-10 items-center text-[16px] leading-6  `}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>

      {/* Right Icons and Search */}
      <div className="flex items-center gap-4">
        <div
          className={`${styles.search} bg-[#F5F5F5] hidden lg:flex items-center p-2 rounded-md`}
        >
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-transparent outline-none text-[12px] opacity-50"
          />
          <CiSearch className="w-[24px] h-[24px] cursor-pointer" />
        </div>
        <Link to="/wishlist" className="relative">
          <div className="absolute -top-[0.3rem] flex justify-center left-[0.7rem] bg-[#DB4444] rounded-full w-full h-full p-1">
            <span className="text-[12px] text-[#FAFAFA] font-[400] font-Poppins leading-[18px]">
              {wishlist.length || 0}
            </span>
          </div>
          <CiHeart className="w-[24px] h-[24px] cursor-pointer" />
        </Link>
        <Link to="/cart" className="relative">
          <div className="absolute -top-[0.3rem] flex justify-center left-[0.7rem] bg-[#DB4444] rounded-full w-full h-full p-1">
            <span className="text-[12px] text-[#FAFAFA] font-[400] font-Poppins leading-[18px]">
              {cart.length || 0}
            </span>
          </div>
          <IoCartOutline className="w-[24px] h-[24px] cursor-pointer" />
        </Link>

        {/* User Icon and Dropdown */}
        <div
          className={`relative rounded-full p-2 ${
            userMenuOpen ? 'bg-[#DB4444] text-white' : ''
          }`}
          onClick={handleUserClick}
        >
          <CiUser className="w-[24px] h-[24px] cursor-pointer" />
          {isAuthenticated && (
            <div>
              {userMenuOpen && (
                <div className="absolute right-0 mt-7 w-[225px] bg-[#000000] opacity-90 rounded-md shadow-lg z-10">
                  <ul className="list-none text-[14px] font-Poppins text-white">
                    <li className="flex items-center gap-3 py-2 px-4 hover:bg-gray-400">
                      <PiUserLight />{' '}
                      <Link to="/account">Manage My Account</Link>
                    </li>
                    <li className="flex items-center gap-3 py-2 px-4 hover:bg-gray-400">
                      <CiGift /> My Order
                    </li>
                    <li className="flex items-center gap-3 py-2 px-4 hover:bg-gray-400">
                      <TiDeleteOutline /> My Cancellations
                    </li>
                    <li className="flex items-center gap-3 py-2 px-4 hover:bg-gray-400">
                      <CiStar /> My Reviews
                    </li>
                    <li
                      onClick={handleLogout}
                      className="flex items-center gap-3 py-2 px-4 hover:bg-gray-400"
                    >
                      <CiLogout /> Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`flex flex-col items-start gap-3 lg:hidden px-3  ${styles.nav}`}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      )}
    </div>
  );
}

export default NavBar;
