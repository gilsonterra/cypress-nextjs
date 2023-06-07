'use client';

import ButtonMenu from '@/app/components/ButtonMenu/ButtonMenu';
import ProductItem from '@/app/components/ProductItem/ProductItem';
import productsData from '@/app/data/products.json';
import { Product } from '@/app/types/products';
import { useContext, useEffect, useMemo, useState } from 'react';
import { AppContext } from './provider';

export default function Home() {
  const [categories, setCategories] = useState<string[]>([] as string[]);
  const [categorySelected, setCategorySelected] = useState('skincare');
  const { setCart } = useContext(AppContext);

  const products = useMemo(
    () =>
      (productsData as Product[]).filter((item) =>
        categorySelected ? item.category === categorySelected : item
      ),
    [categorySelected]
  );

  const handleBuyClick = (product: Product) => {
    setCart?.((prev) => [...prev, product]);
  };

  useEffect(() => {
    const categories = (productsData as Product[])?.reduce((acc, current) => {
      if (!acc.includes(current.category)) {
        acc.push(current.category);
      }

      return acc;
    }, [] as string[]);

    setCategories(categories);
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-row gap-2 justify-center mb-5 flex-wrap">
        <ButtonMenu
          category="home"
          onClick={() => setCategorySelected('')}
          selected={!categorySelected}
        />
        {categories.map((category) => (
          <ButtonMenu
            key={category}
            onClick={() => setCategorySelected(category)}
            category={category}
            selected={category === categorySelected}
          />
        ))}
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 items-start">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            actionSlot={
              <button
                className="bg-lime-500 text-white font-semibold shadow-lg rounded hover:bg-lime-700 p-4"
                onClick={() => handleBuyClick(product)}
              >
                Comprar
              </button>
            }
          />
        ))}
      </div>
    </div>
  );
}
