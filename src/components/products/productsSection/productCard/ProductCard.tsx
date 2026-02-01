import "./ProductCard.css";
import type { Product } from "../../../../types";
import Stars from "../../../../components/products/ui/rating/Stars";

type Props = { oneProduct: Product };

const ProductCard = ({ oneProduct }: Props) => {
  const { name, spec, img, rating, price, avail } = oneProduct;
  return (
    <article className="productCard">
      <h3 className="productCard-title">{name}</h3>
      <p className="productCard-spec">{spec}</p>
      {/* image + rating */}
      <div className="productCard-imgWrap">
        <img className="productImg" src={img} alt={name} />
        <div className="productCard-rating">
          <Stars value={rating} />
        </div>
      </div>
      {/* price + buy button */}
      <div className="priceBox">
        <div className="productCard-price">{price}</div>
        <button className="buyBtn">Koupit</button>
      </div>
      <div className="available">{avail}</div>
    </article>
  );
};

export default ProductCard;
