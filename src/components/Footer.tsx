import sendIcon from '/icon-send.svg';
import qrcode from '/QR.png';
import { FiFacebook } from 'react-icons/fi';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa6';
import { TiSocialLinkedin } from 'react-icons/ti';

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="px-10 lg:px-[100px] justify-center lg:items-start py-10 flex flex-col gap-6 lg:justify-between lg:flex-row">
        <div className="flex flex-col gap-7">
          <h1 className="font-[700] text-[24px] leading-6">ShopFrom</h1>
          <div className="flex flex-col gap-5">
            <p className="font-[500] text-[20px] leading-7">Subscribe</p>
            <div className="flex flex-col gap-3">
              <p>Get 10% off your first order</p>
              {/* <div className="flex items-center rounded-[4px] bg-black border border-white pr-3">
                <input
                  type="text"
                  placeholder="Your Email Address"
                  className=" outline-none bg-inherit p-4 "
                />
                <img src={sendIcon} alt="logo" className="text-white" />
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <h1 className="font-[500] text-[20px] leading-6">Support</h1>
          <div className="flex flex-col gap-5">
            <p className="font-[400] text-[16px] leading-6">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="font-[400] text-[16px] leading-6">
              exclusive@gmail.com
            </p>
            <p className="font-[400] text-[16px] leading-6">
              +88015-88888-9999
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <h1 className="font-[500] text-[20px] leading-6">Account</h1>
          <div className="flex flex-col gap-5">
            <p className="font-[400] text-[16px] leading-6">My Account</p>
            <p className="font-[400] text-[16px] leading-6">Login / Register</p>
            <p className="font-[400] text-[16px] leading-6">Cart</p>
            <p className="font-[400] text-[16px] leading-6">Wishlist</p>
            <p className="font-[400] text-[16px] leading-6">Shop</p>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <h1 className="font-[500] text-[20px] leading-6">Quick Links</h1>
          <p className="font-[400] text-[16px] leading-6">Privacy Policy</p>
          <p className="font-[400] text-[16px] leading-6">Terms Of Use</p>
          <p className="font-[400] text-[16px] leading-6">FAQ</p>
          <p className="font-[400] text-[16px] leading-6">Contact</p>
        </div>
        <div className="flex flex-col gap-7">
          <h1 className="font-[500] text-[20px] leading-6">Download App</h1>
          <p className="font-[500] text-[14px] leading-[18px] opacity-[70%]">
            Save $3 with App New User Only
          </p>
          <img src={qrcode} alt="QR code" />
          <div className="flex justify-between">
            <span>
              <FiFacebook className="w-[24px] h-[24px]" />
            </span>
            <span>
              <RiTwitterXLine className="w-[24px] h-[24px]" />
            </span>
            <span>
              <FaInstagram className="w-[24px] h-[24px]" />
            </span>
            <span>
              <TiSocialLinkedin className="w-[24px] h-[24px]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
