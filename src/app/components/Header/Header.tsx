'use client';

import Link from 'next/link';
import Logo from '../Logo/Logo';
import { useContext } from 'react';
import { AppContext } from '@/app/provider';

const Header: React.FC = () => {
  const { cart } = useContext(AppContext);

  return (
    <div className="flex gap-2 justify-between items-center">
      <Link href="/">
        <Logo />
      </Link>
      <Link className="flex items-center gap-2" href="/checkout">
        <div className="text-white font-medium">Carrinho</div>
        <div className="bg-red-700 text-white h-7 w-7 text-sm p-3 flex items-center justify-center rounded-full">
          {cart?.length <= 99 ? cart?.length : '+99'}
        </div>
      </Link>
    </div>
  );
};

export default Header;
