import BestSellerSection from "../../components/products/bestSellerSection/BestSellerSection";
import ProductsSection from "../../components/products/productsSection/ProductsSection";
import {
  getProducts,
  getBestSellerProducts,
} from "../../services/api/products";

const ProductsListPage = () => {
  const bestSellers = getBestSellerProducts();
  const allProducts = getProducts();

  return (
    <div>
      <BestSellerSection bestSellers={bestSellers} />
      <ProductsSection allProducts={allProducts} />
    </div>
  );
};

export default ProductsListPage;
