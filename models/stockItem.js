export class StockItem {
  constructor(name, quantity, expiryDate) {
    this.name = name;
    this.quantity = quantity;
    this.expiryDate = expiryDate;
  }

  get() {
    return {
      name: this.name,
      quantity: this.quantity,
      expiryDate: this.expiryDate,
      type: this.type
    }
  }
}

export class Dairy extends StockItem {
  constructor(name, quantity, expiryDate) {
    super(name, quantity, expiryDate);
    this.type = "Dairy";
  }
}

export class Meat extends StockItem {
  constructor(name, quantity, expiryDate) {
    super(name, quantity, expiryDate);
    this.type = "Meat";
  }
}

export class Produce extends StockItem {
  constructor(name, quantity, expiryDate) {
    super(name, quantity, expiryDate);
    this.type = "Produce";
  }
}
