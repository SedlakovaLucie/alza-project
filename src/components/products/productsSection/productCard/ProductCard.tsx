import "./ProductCard.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { Product } from "../../../../types";
import Stars from "../../../../components/products/ui/rating/Stars";
import BuyBtnSelect, { type BuyAction } from "./buySelect/BuyBtnSelect";

type Props = { oneProduct: Product };

const ProductCard = ({ oneProduct }: Props) => {
  const { t } = useTranslation();
  const [buyButton, setBuyButton] = useState("buy" as BuyAction);
  const { name, spec, img, rating, price, avail } = oneProduct;
  return (
    <article className="productCard">
      <h3 className="productCard-title">{name}</h3>
      <p className="productCard-spec">{spec}</p>

      <div className="productCard-imgWrap">
        {/* image */}
        <img className="productImg" src={img} alt={name} />
        {/* rating */}
        <div className="productCard-rating">
          <Stars value={rating} />
          {rating}
        </div>
      </div>

      <div className="priceBox">
        {/* price */}
        <div className="productCard-price">
          {price} {t("currency")}
        </div>
        {/* buy button */}
        <BuyBtnSelect value={buyButton} onChange={setBuyButton} />
      </div>
      <div className="available">{avail}</div>
    </article>
  );
};

export default ProductCard;
