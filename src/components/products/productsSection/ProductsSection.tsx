import { useMemo, useState } from "react";
import "./ProductsSection.css";
import ProductCard from "./productCard/ProductCard";
import type { Product } from "../../../types";

type Props = {
  allProducts: Product[];
};

type TabKey = "TOP" | "BESTSELLER" | "CHEAPEST" | "EXPENSIVE";

// tabs
const TABS: { key: TabKey; label: string }[] = [
  { key: "TOP", label: "TOP" },
  { key: "BESTSELLER", label: "Nejprodávanější" },
  { key: "CHEAPEST", label: "Od nejlevnějšího" },
  { key: "EXPENSIVE", label: "Od nejdražšího" },
];

//parse na number
const parseNumber = (value: string) => {
  const numbers = value.replaceAll(/[^\d]/g, "");
  return numbers ? Number(numbers) : 0;
};

const ProductsSection = ({ allProducts }: Props) => {
  const [activeTab, setActiveTab] = useState<TabKey>("TOP");

  const visibleProducts = useMemo(() => {
    const copy = [...allProducts];

    switch (activeTab) {
      case "TOP":
        return copy.sort((a, b) => b.rating - a.rating);
      case "BESTSELLER":
        return copy.sort((a, b) => a.order - b.order);
      case "CHEAPEST":
        return copy.sort((a, b) => parseNumber(a.price) - parseNumber(b.price));
      case "EXPENSIVE":
        return copy.sort((a, b) => parseNumber(b.price) - parseNumber(a.price));
      default:
        return copy;
    }
  }, [allProducts, activeTab]);

  return (
    <section className="productsSection">
      {/* TABS */}
      <div className="tabs">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={tab.key === activeTab ? "tab active" : "tab"}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* PRODUCTS */}
      <div className="productsGrid">
        {visibleProducts.map((oneProduct) => (
          <ProductCard key={oneProduct.id} oneProduct={oneProduct} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
