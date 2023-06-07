"use client";

import { useEffect, useState, useMemo } from "react";
import productsData from "@/app/data/products.json";
import { Product } from "@/app/types/products";
import ButtonMenu from "@/app/components/ButtonMenu";

export default function Home() {
  const [categories, setCategories] = useState<string[]>([] as string[]);
  const [categorySelected, setCategorySelected] = useState("skincare");
  const [cart, setCart] = useState<Product[]>([] as Product[]);

  const products = useMemo(
    () =>
      (productsData as Product[]).filter((item) =>
        categorySelected ? item.category === categorySelected : item
      ),
    [categorySelected]
  );

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
    <main className="flex min-h-screen flex-col items-center p-10 bg-blue-500 ma-5">
      <div className="flex justify-center items-center gap-2 mb-16">
        <h1 className="title text-6xl text-white font-black">Lojinha</h1>
        <h1 className="title text-6xl font-black -translate-x-56 translate-y-1 text-pink-600">Lojinha</h1>
        {cart.length > 0 && (
          <div className="bg-red-700 text-white h-8 w-8 flex items-center justify-center rounded-full">
            {cart.length}
          </div>
        )}
      </div>
      <div className="container">
        <div className="flex flex-row gap-2 justify-center mb-5 flex-wrap">
          <ButtonMenu
            category="home"
            onClick={() => setCategorySelected("")}
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
            <div
              className="flex flex-col h-80 border-pink-900 border-solid border-2 p-5 hover:bg-pink-300 bg-pink-200 justify-stretch rounded-2xl shadow-lg"
              key={product.id}
            >
              <h2 className="text-pink-900 font-semibold text-2xl">{product.title}</h2>
              <p className="flex-1 font-serif">{product.description}</p>
              <div className="flex flex-col gap-1 justify-between">
                <div className="flex flex-col justify-center text-white bg-blue-600 w-fit p-1 rounded-md">
                  {product.brand}
                </div>
                <div className="flex justify-between">
                  <div className="flex">
                    <div className="font-extrabold text-5xl flex items-end text-pink-900">
                      R$ {product.price}
                    </div>                    
                  </div>
                  <button className="bg-lime-500 text-white font-semibold shadow-lg rounded hover:bg-lime-700 p-4" onClick={() => setCart((prev) => [...prev, product])}>Comprar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
