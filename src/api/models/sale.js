export class Sale {
    constructor(item, quantity, price) {
      this.item = item;
      this.quantity = quantity;
      this.price = price;
    }
  
    calculateSalePrice() {
      return this.quantity * this.price;
    }
  
    updateStockItem() {
      this.item.quantity -= this.quantity;
      if (this.item.quantity <= 0) {
        this.item.expiryDate = null;
      }
    }
  
    getSaleDetails() {
      return `${this.quantity} ${this.item.name} sold for ${this.calculateSalePrice()}`;
    }
  }
  