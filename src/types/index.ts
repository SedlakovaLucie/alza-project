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
  breadcrumbs: Array<{
    category: { name: string };
  }>;
  data: Product[];
  total?: number;
  has_next?: boolean;
};
