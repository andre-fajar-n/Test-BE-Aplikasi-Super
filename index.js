import bodyParser from "body-parser";
import { Dairy, StockItem } from "./src/api/models/stockItem.js";
import { StockManager } from "./src/api/models/stockManager.js";
import express from 'express';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// // add new stock item
// const itemUltramilk = new Dairy("ultra milk", 10, new Date(2023,3,19))

// // init stock manager
// const stockItems = new StockManager("FIFO");


// stockItems.addStockItem(itemUltramilk.get())


// try {
//     stockItems.removeStockItem("Dairy", 13)
//     console.log(stockItems)
// } catch (error) {
//     console.log("ERROR :",error)
// }
