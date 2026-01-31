import "./BestSellerSection.css";
import BestSellerCard from "./bestSellerCard/BestSellerCard";
import type { Product } from "../../../types";

type Props = {
  products: Product[];
};

// tady bude i carousel
const BestSellerSection = ({ products }: Props) => {
  return (
    <section>
      <h1>Nejprodávanější</h1>
      <div className="bestSellerCard-section">
        {products.map((product) => (
          <BestSellerCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestSellerSection;
