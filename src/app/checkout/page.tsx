'use client';

import { useContext } from 'react';
import { AppContext } from '../provider';
import ProductItem from '../components/ProductItem/ProductItem';
import Link from 'next/link';

export default function Checkout() {
  const { cart } = useContext(AppContext);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Link
          className="bg-pink-600 font-black items-center justify-center p-4 rounded-2xl text-white shadow-2xl hover:bg-pink-500"
          href="/"
        >
          Voltar
        </Link>
        <div className="font-semibold text-3xl">
          Total de <span className="font-black">{cart?.length}</span> produtos
          no carrinho
        </div>
      </div>
      {cart?.map((item) => (
        <ProductItem product={item} />
      ))}
    </div>
  );
}
