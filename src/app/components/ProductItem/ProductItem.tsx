import { Product } from '@/app/types/products';

type ProductItemProps = {
  product: Product;
  actionSlot?: JSX.Element;
};

const ProductItem: React.FC<ProductItemProps> = ({ product, actionSlot }) => {
  const { title, description, price, brand } = product;

  return (
    <div className="flex gap-2 flex-col h-80 border-pink-900 duration-0 border-solid border-2 p-5 hover:bg-pink-300 bg-pink-200 justify-stretch rounded-2xl shadow-lg">
      <h2 className="text-pink-900 font-semibold text-2xl">
        {title?.toUpperCase()}
      </h2>
      <p className="flex-1 font-serif">{description}</p>
      <div className="flex flex-col gap-1 justify-between">
        <div className="flex flex-col justify-center text-white bg-blue-600 w-fit p-1 rounded-md">
          {brand}
        </div>
        <div className="flex justify-between">
          <div className="flex">
            <div className="font-extrabold text-5xl flex items-end text-pink-900">
              R$ {price}
            </div>
          </div>
          {actionSlot}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
