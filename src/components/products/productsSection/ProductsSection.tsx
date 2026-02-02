import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import "./ProductsSection.css";
import ProductCard from "./productCard/ProductCard";
import type { Product } from "../../../types";

type Props = { allProducts: Product[] };

export const TABS = ["top", "bestseller", "cheapest", "expensive"] as const;
export type TabKey = (typeof TABS)[number];

const parseNumber = (value: string) => {
  const numbers = value.replaceAll(/[^\d]/g, "");
  return numbers ? Number(numbers) : 0;
};

const ProductsSection = ({ allProducts }: Props) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabKey>("top");

  const visibleProducts = useMemo(() => {
    const copy = [...allProducts];

    switch (activeTab) {
      case "top":
        return copy.sort((a, b) => b.rating - a.rating);
      case "bestseller":
        return copy.sort((a, b) => a.order - b.order);
      case "cheapest":
        return copy.sort((a, b) => parseNumber(a.price) - parseNumber(b.price));
      case "expensive":
        return copy.sort((a, b) => parseNumber(b.price) - parseNumber(a.price));
      default:
        return copy;
    }
  }, [allProducts, activeTab]);

  return (
    <section className="productsSection">
      <div className="tabs">
        {TABS.map((key) => (
          <button
            key={key}
            type="button"
            className={key === activeTab ? "tab active" : "tab"}
            onClick={() => setActiveTab(key)}
          >
            {t(`productsSection.tabs.${key}`)}
          </button>
        ))}
      </div>

      <div className="productsGrid">
        {visibleProducts.map((oneProduct) => (
          <ProductCard key={oneProduct.id} oneProduct={oneProduct} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
