import { Link, NavLink, Outlet } from 'react-router-dom';

const AccountSideBar = () => {
  return (
    <div className="py-28 lg:py-32 px-[100px] flex flex-col gap-10">
      <div className="flex items-center gap-3 font-[400] text-[14px] leading-[21px]">
        <Link to="/">Home</Link>
        <span>/</span>
        <p>Account</p>
      </div>
      <div className="flex">
        <div className="flex flex-col items-start gap-8 mr-auto">
          <div className="flex flex-col gap-3">
            <h1 className="font-Poppins font-[500] text-[16px] leading-[24px]">
              Manage My Account
            </h1>
            <ul className="font-[400] text-[16px] opacity-[50%] text-[#000000] cursor-pointer flex flex-col ml-6 gap-2">
              <li className="text-[#DB4444] duration-200">
                <NavLink to={'accountedit'}>My Profile</NavLink>
              </li>
              <li className="hover:text-[#DB4444] duration-200">
                <NavLink to={'address'}>Address Book</NavLink>
              </li>
              <li className="hover:text-[#DB4444] duration-200">
                My Payment Options
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-Poppins font-[500] text-[16px] leading-[24px]">
              My Orders
            </h1>
            <ul className="font-[400] text-[16px] opacity-[50%] text-[#000000] cursor-pointer flex flex-col ml-6 gap-2">
              <li className="hover:text-[#DB4444] duration-200">My Returns</li>
              <li className="hover:text-[#DB4444] duration-200">
                My Cancellations
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-Poppins font-[500] text-[16px] leading-[24px]">
              My WishList
            </h1>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AccountSideBar;
