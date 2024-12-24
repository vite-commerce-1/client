export interface ICartItem {
  product: {
    _id: string;
    name: string;
    price: number;
  };
  quantity: number;
  price: number;
  totalPrice: number;
  _id: string;
}

export interface ICart {
  _id: string;
  user: string;
  items: ICartItem[];
  totalAmount: number;
  createdAt: Date;
  updateAt: Date;
}

export interface ICartResponse {
  data: ICart;
}
