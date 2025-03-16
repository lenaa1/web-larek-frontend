import { ICartItem } from "../../types";
  
  export class CartModel {
    items: ICartItem[] = [];
  
    addItem(productId: number): void {
      const item = this.items.find(i => i.productId === productId);
      if (item) {
        item.quantity += 1;
      } else {
        this.items.push({ productId, quantity: 1 });
      }
    }
  
    deleteItem(productId: number): void {
      this.items = this.items.filter(item => item.productId !== productId);
    }
  
    deleteAllItems(): void {
      this.items = [];
    }
  
    getAllItems(): ICartItem[] {
      return this.items; 
    }
  }
  