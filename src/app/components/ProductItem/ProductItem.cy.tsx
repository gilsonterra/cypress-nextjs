import React from 'react';
import ProductItem from './ProductItem';
import { Product } from '@/app/types/products';

const PRODUCT_MOCK = {
  id: 1,
  title: 'Produto Mocado',
  brand: 'teste',
  category: 'teste',
  description: 'isso é um teste com cypress component',
  discountPercentage: 0,
  images: [],
  price: 1985,
  rating: 0,
  stock: 0,
  thumbnail: ''
} as Product;

describe('<ProductItem />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProductItem product={PRODUCT_MOCK} />);
  });
});
