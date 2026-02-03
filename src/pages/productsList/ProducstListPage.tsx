import "./ProductsListPage.css";
import { useTranslation } from "react-i18next";
import loaderIcon from "../../assets/images/loader-icon.svg";
import { useEffect, useState } from "react";
import BestSellerSection from "../../components/products/bestSellerSection/BestSellerSection";
import ProductsSection from "../../components/products/productsSection/ProductsSection";
import HeroSection from "../../components/products/heroSection/HeroSection";
import { fetchProductsPageData } from "../../services/api/products";

type ProductsPageData = Awaited<ReturnType<typeof fetchProductsPageData>>;

type LoadState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "success"; data: ProductsPageData };

const ProductsListPage = () => {
  const { t } = useTranslation();
  const [state, setState] = useState<LoadState>({ status: "loading" });

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const data = await fetchProductsPageData();
        if (isMounted) setState({ status: "success", data });
      } catch (e) {
        const technicalMessage =
          e instanceof Error ? e.message : "Unknown error";
        console.error("fetchProductsPageData failed:", technicalMessage, e);
        if (!isMounted) return;
        setState({ status: "error" });
      }
    })();
    // Cleanup
    return () => {
      isMounted = false;
    };
  }, []);

  // Loading state
  if (state.status === "loading") {
    return (
      <div className="loadingSection" aria-busy="true">
        <img
          src={loaderIcon}
          className="loader-icon"
          alt={t("productListPage.loading")}
        />
      </div>
    );
  }

  // Error state
  if (state.status === "error") {
    return <div className="errorSection">{t("productListPage.error")}</div>;
  }

  // Success state
  const { categoryName, bestSellers, products } = state.data;
  return (
    <div>
      <HeroSection categoryName={categoryName} />
      <BestSellerSection bestSellers={bestSellers} />
      <ProductsSection allProducts={products} />
    </div>
  );
};

export default ProductsListPage;
