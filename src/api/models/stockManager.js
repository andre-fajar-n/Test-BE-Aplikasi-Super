export class StockManager {
  constructor(sellStrategy) {
    this.stockItems = [];
    this.sellStrategy = sellStrategy;
  }

  addStockItem(stockItem) {
    this.stockItems.push(stockItem);
  }

  getTotalStockQuantity() {
    let totalQuantity = 0;
    for (let stockItem of this.stockItems) {
      totalQuantity += stockItem.quantity;
    }
    return totalQuantity;
  }

  removeStockItem(stockItemType, quantity) {

    var newItems = this.stockItems.filter((el) => {
      return el.type === stockItemType;
    })

    switch (this.sellStrategy) {
      case 'FIFO':
        newItems.sort((a, b) => b.expiryDate - a.expiryDate);
        break;
    
      case 'FEFO':
        newItems.sort((a, b) => a.expiryDate - b.expiryDate);
        break;

      case 'LIFO':
        // newItems.reverse();
        break;

      default:
        return 'invalid sell strategy'
    }

    var remainingStock = quantity
    if (newItems.length > 0) {
      var i = 0
      while (remainingStock > 0) {
        // console.log("TEST",newItems[i].quantity,remainingStock)
        if (i >= newItems.length) {
          throw new Error("insufficient stock")
        }

        if (newItems[i].quantity > remainingStock) {
          const idxStockItems = this.stockItems.indexOf(newItems[i])
          this.stockItems[idxStockItems].quantity -= remainingStock
          remainingStock = 0
          // break
        } else if (newItems[i].quantity === remainingStock) {
          remainingStock -= newItems[i].quantity
          this.stockItems.splice(newItems[i], 1)
        } else {
          throw new Error("insufficient stock")
        }
        i++
      }
    }
    // for (const i = 0; i < newItems.length; i++) {
    // }

    // return
  }
}