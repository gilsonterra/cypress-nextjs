import { Product } from '@/app/types/products';
import ImageWithFallback from '../ImageWithFallback/ImageWithFallback';

type ProductItemProps = {
  product: Product;
  actionSlot?: JSX.Element;
};

const ProductItem: React.FC<ProductItemProps> = ({ product, actionSlot }) => {
  const { title, description, price, brand, thumbnail } = product;

  return (
    <div
      style={{ minHeight: '600px' }}
      className="product-item flex gap-2 flex-col flex-1 p-y-52 duration-0 p-5  bg-white justify-stretch rounded-sm shadow-lg items-center"
    >
      <h2 className="text-pink-900 font-semibold text-2xl min-h-fit">
        {title?.toUpperCase()}
      </h2>
      <div className="font-serif w-full text-start h-24">{description}</div>
      <div className="flex-1 w-full flex items-center justify-center">
        <ImageWithFallback image={`${thumbnail}`} description={description} />
      </div>
      <div className="flex flex-col gap-1 justify-between  w-full">
        <div className="flex flex-col font-light text-blue-950 justify-start w-fit p-1 rounded-lg">
          {brand}
        </div>
        <div className="flex w-full justify-between">
          <div className="flex">
            <div className="font-extrabold text-4xl flex items-end text-pink-900">
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
