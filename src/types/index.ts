export type Product = {
  id: number;
  img: string;
  name: string;
  spec: string;
  price: string;
  avail: string;
  rating: number;
  order: number;
  icons: {
    text: string;
    image: string;
  }[];
};

export type ProductsApiResponse = {
  data: Product[];
};
