import { Dairy, StockItem } from "../../models/stockItem";
import { StockManager } from "../../models/stockManager";
import {expect, jest, test} from '@jest/globals';

describe("stockManagerClass", () => {
    it("constructor", () => {
        const stockManager = new StockManager('FIFO');

        expect(stockManager.sellStrategy).toBe("FIFO")
        expect(stockManager.stockItems).toStrictEqual([])
    })

    it("addStockItem", () => {
        const stockManager = new StockManager('FIFO');

        const stockItem = new StockItem("item",10,new Date(2023,3,20))

        stockManager.addStockItem(stockItem)

        expect(stockManager.stockItems.length).toBe(1)
        expect(stockManager.stockItems).toEqual([
            {
                "name":"item",
                "quantity":10,
                "expiryDate":new Date(2023,3,20)
            }
        ])
    })

    it("getTotalStockQuantity", () => {
        const stockManager = new StockManager('FIFO');

        const stockItem1 = new StockItem("item",10,new Date(2023,3,20))
        const stockItem2 = new StockItem("item",7,new Date(2023,3,20))

        stockManager.addStockItem(stockItem1)
        stockManager.addStockItem(stockItem2)
        
        expect(stockManager.getTotalStockQuantity()).toBe(17)
    })

    it("removeStockItem enough stock", () => {
        const stockManager = new StockManager('FIFO');

        const stockItem1 = new Dairy("item",10,new Date(2023,3,20))
        const stockItem2 = new Dairy("item",7,new Date(2023,3,19))

        stockManager.addStockItem(stockItem1)
        stockManager.addStockItem(stockItem2)

        stockManager.removeStockItem("Dairy", 13)

        expect(stockManager.getTotalStockQuantity()).toBe(4)
        expect(stockManager.stockItems).toEqual([
            {
                "name":"item",
                "quantity":4,
                "expiryDate":new Date(2023,3,19),
                "type":"Dairy"
            }
        ])
    })

    it("removeStockItem insufficient stock", () => {
        const stockManager = new StockManager('FIFO');

        const stockItem1 = new Dairy("item",10,new Date(2023,3,20))
        const stockItem2 = new Dairy("item",7,new Date(2023,3,19))

        stockManager.addStockItem(stockItem1)
        stockManager.addStockItem(stockItem2)

        
        expect(() => {
            stockManager.removeStockItem("Dairy", 23)
        }).toThrow("insufficient stock")
        expect(stockManager.stockItems).toEqual([
            {
                "name":"item",
                "quantity":10,
                "expiryDate":new Date(2023,3,20),
                "type":"Dairy"
            },
            {
                "name":"item",
                "quantity":7,
                "expiryDate":new Date(2023,3,19),
                "type":"Dairy"
            }
        ])
    })
});

describe("stockManager Check All Sell Strategy", () => {
    it("removeStockItem sell strategy FIFO", () => {
        const stockManager = new StockManager('FIFO');

        const stockItem1 = new Dairy("item",8,new Date(2023,3,18))
        const stockItem2 = new Dairy("item",7,new Date(2023,3,20))
        const stockItem3 = new Dairy("item",2,new Date(2023,3,15))

        stockManager.addStockItem(stockItem1)
        stockManager.addStockItem(stockItem2)
        stockManager.addStockItem(stockItem3)

        
        stockManager.removeStockItem("Dairy", 13)

        expect(stockManager.getTotalStockQuantity()).toBe(4)
        expect(stockManager.stockItems).toEqual([
            {
                "name":"item",
                "quantity":2,
                "expiryDate":new Date(2023,3,18),
                "type":"Dairy"
            },
            {
                "name":"item",
                "quantity":2,
                "expiryDate":new Date(2023,3,15),
                "type":"Dairy"
            }
        ])
    })

    it("removeStockItem sell strategy FEFO", () => {
        const stockManager = new StockManager('FEFO');

        const stockItem1 = new Dairy("item",8,new Date(2023,3,18))
        const stockItem2 = new Dairy("item",7,new Date(2023,3,20))
        const stockItem3 = new Dairy("item",2,new Date(2023,3,15))

        stockManager.addStockItem(stockItem1)
        stockManager.addStockItem(stockItem2)
        stockManager.addStockItem(stockItem3)

        
        stockManager.removeStockItem("Dairy", 13)

        expect(stockManager.getTotalStockQuantity()).toBe(4)
        expect(stockManager.stockItems).toEqual([
            {
                "name":"item",
                "quantity":4,
                "expiryDate":new Date(2023,3,20),
                "type":"Dairy"
            }
        ])
    })

    it("removeStockItem sell strategy LIFO", () => {
        const stockManager = new StockManager('LIFO');

        const stockItem1 = new Dairy("item",3,new Date(2023,3,18))
        const stockItem2 = new Dairy("item",7,new Date(2023,3,20))
        const stockItem3 = new Dairy("item",5,new Date(2023,3,15))

        stockManager.addStockItem(stockItem1)
        stockManager.addStockItem(stockItem2)
        stockManager.addStockItem(stockItem3)
        
        stockManager.removeStockItem("Dairy", 8)

        expect(stockManager.getTotalStockQuantity()).toBe(7)
        expect(stockManager.stockItems).toEqual([
            {
                "name":"item",
                "quantity":3,
                "expiryDate":new Date(2023,3,18),
                "type":"Dairy"
            },
            {
                "name":"item",
                "quantity":4,
                "expiryDate":new Date(2023,3,20),
                "type":"Dairy"
            }
        ])
    })
});