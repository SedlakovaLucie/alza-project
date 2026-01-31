import "./BestSellerCard.css";
import type { Product } from "../../../../types";

type Props = {
  product: Product;
};

const BestSellerCard = ({ product }: Props) => {
  const { img, name, rating, spec, price } = product;
  return (
    <article className="bestSellerCard">
      <div className="bestSellerCard-imageWrap">
        <img className="bestSellerCard-image" src={img} alt={name} />
      </div>
      <h3 className="bestSellerCard-name">{name}</h3>
      {/* rating zatím jen číslo */}
      <div>{rating}</div>
      <p className="bestSellerCard-spec">{spec}</p>
      <div>{price}</div>
    </article>
  );
};

export default BestSellerCard;
