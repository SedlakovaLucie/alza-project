import { useEffect } from "react";
import alzaData from "../data/data.json";

export type Product = {
  id: number;
  img: string;
  name: string;
  spec: string;
  price: string;
  avail: string;
  rating: number;
};

type ProductsApiResponse = {
  data: Product[];
};

const ProductsApi = () => {
  useEffect(() => {
    const json = alzaData as ProductsApiResponse;

    const products: Product[] = json.data.map(
      ({ id, img, name, spec, price, avail, rating }) => ({
        id,
        img,
        name,
        spec,
        price,
        avail,
        rating,
      }),
    );

    console.log("produkty:", products);
  }, []);
};

export default ProductsApi;
