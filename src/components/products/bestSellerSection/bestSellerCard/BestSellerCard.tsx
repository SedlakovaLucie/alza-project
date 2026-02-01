import "./BestSellerCard.css";
import { useTranslation } from "react-i18next";
import type { Product } from "../../../../types";
import Stars from "../../ui/rating/Stars";

type Props = {
  product: Product;
};

const BestSellerCard = ({ product }: Props) => {
  const { t } = useTranslation();
  const { img, name, rating, spec, price } = product;

  return (
    <article className="bestSellerCard">
      <div className="bestSellerCard-imageWrap">
        <img className="bestSellerCard-image" src={img} alt={name} />
      </div>
      <div className="bestSellerCard-body">
        <h3 className="bestSellerCard-name" title={name}>
          {name}
        </h3>
        {/* rating */}
        <div className="bestSellerCard-rating">
          <Stars value={rating} />
          {rating}
        </div>
        <p className="bestSellerCard-spec">{spec}</p>
      </div>
      <div>
        <div className="bestSellerCard-price">
          {price} {t("currency")}
        </div>
      </div>
    </article>
  );
};

export default BestSellerCard;
