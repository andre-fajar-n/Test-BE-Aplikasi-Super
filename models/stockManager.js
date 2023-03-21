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
        newItems.sort((a, b) => a.expiryDate - b.expiryDate);
        break;
        
      case 'FEFO':
        newItems.sort((a, b) => b.expiryDate - a.expiryDate);
        break;

      case 'LIFO':
        newItems.reverse()
        break;

      default:
        throw new Error('invalid sell strategy')
    }

    var remainingStock = quantity
    if (newItems.length > 0) {
      var i = 0
      var deletedItems = [];
      while (remainingStock > 0) {
        if (i >= newItems.length) {
          throw new Error("insufficient stock")
        }
        
        if (newItems[i].quantity > remainingStock) {
          const idxStockItems = this.stockItems.indexOf(newItems[i])
          this.stockItems[idxStockItems].quantity -= remainingStock
          remainingStock = 0
        } else {
          remainingStock -= newItems[i].quantity
          deletedItems.push(newItems[i])
        }
        i++
      }
      
      for (const v of deletedItems) {
        const index = this.stockItems.indexOf(v)
        this.stockItems.splice(index, 1)
      }
    }

    return this.stockItems
  }
}