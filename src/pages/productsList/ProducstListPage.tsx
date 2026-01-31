import BestSellerSection from "../../components/products/bestSellerSection/BestSellerSection";
import { /* getProducts, */ getBestSellerProducts } from "../../services/api/products";

const ProductsListPage = () => {
 /*  const products = getProducts();  */
  const bestSellers = getBestSellerProducts();

  return (
    <div>
      <BestSellerSection products={bestSellers} />
      {/* tady pak bude ProductsSection products={products} */}
    </div>
  );
};

export default ProductsListPage;
