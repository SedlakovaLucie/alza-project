import alzaData from "../data/data.json";
import type { Product, ProductsApiResponse } from "../../types";

export const getCategoryName = (): string => {
  const json = alzaData as ProductsApiResponse;
  return json.breadcrumbs[0].category.name;
};

export const getProducts = (): Product[] => {
  const json = alzaData as ProductsApiResponse;
  return json.data;
};

export const getBestSellerProducts = (): Product[] => {
  return [...getProducts()].sort((a, b) => a.order - b.order);
};
