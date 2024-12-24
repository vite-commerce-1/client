interface ICategory {
  _id: string;
  name: string;
}

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  image: string[];
  description: string;
  stock: number;
  category: ICategory;
  __v: number;
}

export interface IProductResponse {
  message: string;
  data: IProduct[];
  pagination: {
    totalProduct: number;
    totalPages: number;
    currentPage: number;
    limit: string;
  };
}
