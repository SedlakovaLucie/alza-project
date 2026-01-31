import alzaData from "../data/data.json";
import type { Product, ProductsApiResponse } from "../../types";

export const getProducts = (): Product[] => {
  const json = alzaData as ProductsApiResponse;
  return json.data;
};

const BEST_SELLER_TEXT = "Pořadí mezi nejprodávanějšími v kategorii";

export const getBestSellerProducts = (): Product[] => {
  return getProducts().filter((product) =>
    product.icons.some((icon) => icon.text === BEST_SELLER_TEXT)
  );
};
