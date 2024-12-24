import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Contact } from '../pages/Contact';
import { Login } from '../components/forms/Login';
import { About } from '../pages/About';
import { Signup } from '../components/forms/Signup';
import { NotFound } from '../pages/NotFound';
import { Wishlist } from '../pages/Wishlist';
import { Cart } from '../pages/Cart';
import AccountEdit from '../components/forms/AccountEdit';
import Address from '../components/Address';
import { Account } from '../components/Account';
import Checkout from '../pages/Checkout';
import Product from '../pages/Product';

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="cart" element={<Cart />} />
        <Route path="cart/viewcart/checkout" element={<Checkout />} />
        <Route path="product/:name" element={<Product />} />
        <Route path="account" element={<Account />}>
          <Route index element={<Navigate replace to="accountedit" />} />
          <Route path="accountedit" element={<AccountEdit />} />
          <Route path="address" element={<Address />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AllRoutes;
