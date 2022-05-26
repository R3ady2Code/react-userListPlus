import React from 'react';
import { Link } from 'react-router-dom';

import Users from '../pages/Users';
import Posts from '../pages/Posts';
import Faq from '../pages/Faq';

function Header() {
  return (
    <header className="header">
      <Link className="header__title" to="/users" element={<Users />}>
        Users
      </Link>
      <Link className="header__title" to="/posts" element={<Posts />}>
        Posts
      </Link>
      <Link className="header__title" to="/faq" element={<Faq />}>
        FAQ
      </Link>
    </header>
  );
}

export default Header;
