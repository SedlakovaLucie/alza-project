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
        <img
          className="bestSellerCard-image"
          src={img}
          alt={name}
        />
      </div>
      <div className="bestSellerCard-body">
        <h3 className="bestSellerCard-name" title={name}>
          {name}
        </h3>
        {/* rating zatím jen číslo */}
        <div className="bestSellerCard-rating">{rating}</div>
        <p className="bestSellerCard-spec">{spec}</p>
      </div>
      <div>
        <div className="bestSellerCard-price">{price} Kč</div>
      </div>
    </article>
  );
};

export default BestSellerCard;
