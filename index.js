import { Dairy } from "./models/stockItem.js";
import { StockManager } from "./models/stockManager.js";

// add new stock item
const itemUltramilk = new Dairy("ultra milk", 10, new Date(2023,3,19))

// init stock manager
const stockItems = new StockManager("FIFO");


stockItems.addStockItem(itemUltramilk.get())


try {
    stockItems.removeStockItem("Dairy", 3)
    console.log(stockItems)
} catch (error) {
    console.log("ERROR :",error)
}
