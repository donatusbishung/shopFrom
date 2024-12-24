import React from 'react';

import NavBar from './NavBar';
import AccountSideBar from './AccountSideBar';
import Footer from './Footer';

export const Account: React.FC = () => {
  return (
    <div>
      <NavBar />
      <AccountSideBar />
      <Footer />
    </div>
  );
};
