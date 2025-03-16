import { IProductItem } from "../../types";

export class CatalogModel {
  private items: IProductItem[] = [];

  constructor(items: IProductItem[] = []) {
    this.items = items;
  }

  getAllProducts(): IProductItem[] {
    return this.items;
  }
}
