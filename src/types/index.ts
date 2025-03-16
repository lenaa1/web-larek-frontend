export interface IProductItem {
      id: string,
      description: string,
      image: string,
      title: string,
      category: string,
      price: number
  }

export interface IOrder {
    id: string;
    total: number,
    payment: "online" | "offline",
    deliveryAdress: string,
    items: IProductItem[],
    phone: string,
    email: string
  }

export interface IProductList {
    totalNumber: number,
    items: IProductItem[]
}

export interface ICartItem {
  productId: number;
  quantity: number;
}