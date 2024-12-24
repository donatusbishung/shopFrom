import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ProceedtoCheckout from '../components/ProceedtoCheckout';
import Footer from '../components/Footer';
import CheckoutForm from '../components/forms/CheckoutForm';

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <div className="px-[20px] py-28 lg:px-[100px] flex flex-col gap-12">
        <div className=" ">
          <nav>
            <ul className="flex gap-[4px] lg:gap-[10px] font-Poppins text-[12px] lg:text-[14px] leading-[20px] font-[400]">
              <li>
                <p>Account</p>
              </li>
              <p>/</p>
              <li onClick={() => navigate('/account')}>
                <a href="#">My Account</a>
              </li>
              <p>/</p>
              <Link to="/">
                <a href="#">Product</a>
              </Link>
              <p>/</p>
              <Link to="/cart">
                <a href="#">View Cart</a>
              </Link>
              <p>/</p>
              <li>
                <p className="font-[500]">Checkout</p>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between w-full">
          <CheckoutForm />
          <ProceedtoCheckout />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
