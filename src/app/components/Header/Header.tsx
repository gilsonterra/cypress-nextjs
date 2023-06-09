'use client';

import Link from 'next/link';
import Logo from '../Logo/Logo';
import { useContext } from 'react';
import { AppContext } from '@/app/provider';

const Header: React.FC = () => {
  const { cart } = useContext(AppContext);

  return (
    <div className="flex gap-2 justify-between items-start pt-5">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex gap-2 text-white ">
        <Link className="flex items-center gap-2" href="/user">
          <div className="font-medium">Cadastre-se</div>
        </Link>
        |
        <Link className="flex items-center gap-2" href="/checkout">
          <div className="font-medium">Carrinho</div>
          <div
            data-cy="checkout-cart"
            className="bg-pink-600 h-7 w-7 text-sm p-3 flex items-center justify-center rounded-full -translate-x-1 -translate-y-4"
          >
            {cart?.length <= 99 ? cart?.length : '+99'}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
