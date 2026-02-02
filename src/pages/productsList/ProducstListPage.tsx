import BestSellerSection from "../../components/products/bestSellerSection/BestSellerSection";
import ProductsSection from "../../components/products/productsSection/ProductsSection";
import HeroSection from "../../components/products/heroSection/HeroSection";
import {
  getProducts,
  getBestSellerProducts,
  getCategoryName,
} from "../../services/api/products";

const ProductsListPage = () => {
  const bestSellers = getBestSellerProducts();
  const allProducts = getProducts();
  const categoryName = getCategoryName();

  return (
    <div>
      <HeroSection categoryName={categoryName} />
      <BestSellerSection bestSellers={bestSellers} />
      <ProductsSection allProducts={allProducts} />
    </div>
  );
};

export default ProductsListPage;