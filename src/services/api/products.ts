import alzaData from "../data/data.json";
import type { Product, ProductsApiResponse } from "../../types";

export type ProductsPageData = {
  categoryName: string;
  products: Product[];
  bestSellers: Product[];
};

// Simulate network delay
const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function fetchProductsPageData(): Promise<ProductsPageData> {
  await delay(150);

  const json = alzaData as ProductsApiResponse;

  const categoryName = json.breadcrumbs?.[0]?.category?.name ?? "Produkty";
  const products = json.data ?? [];
  const bestSellers = [...products].sort((a, b) => a.order - b.order);

  return { categoryName, products, bestSellers };
}
