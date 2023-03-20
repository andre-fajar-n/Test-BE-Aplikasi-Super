export class Sale {
  constructor(item, price) {
    this.item = item;
    this.price = price;
  }

  calculateSalePrice() {
    return this.item.quantity * this.price;
  }

  updateQuantity(quantity) {
    this.item.quantity = quantity
  }

  updateExpiryDate(expiryDate) {
    this.item.expiryDate = new Date(expiryDate)
  }

  getSaleDetails() {
    return {
      item: this.item,
      price: this.price,
    }
  }
}
  