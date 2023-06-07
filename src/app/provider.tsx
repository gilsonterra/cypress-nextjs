'use client';

import { Dispatch, createContext, useState } from 'react';
import { Product } from './types/products';

type AppContextValue = {
  cart: Product[];
  setCart?: Dispatch<React.SetStateAction<Product[]>>;
};

export const AppContext = createContext<AppContextValue>({ cart: [] });

const AppProvider: React.FC<any> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([] as Product[]);

  return (
    <AppContext.Provider value={{ cart, setCart }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
