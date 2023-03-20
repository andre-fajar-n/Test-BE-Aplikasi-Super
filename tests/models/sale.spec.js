import { Sale } from "../../models/sale";
import { StockItem } from "../../models/stockItem";

describe("saleClass", () => {
    it("constructor", () => {
        const sale = new Sale(new StockItem("item",19,new Date(2023,3,20)),1000)
        
        expect(sale.price).toBe(1000)
        expect(sale.item.name).toBe("item")
        expect(sale.item.quantity).toBe(19)
        expect(sale.item.expiryDate).toStrictEqual(new Date(2023,3,20))
    })

    it("calculateSalePrice", () => {
        const sale = new Sale(new StockItem("item",19,new Date(2023,3,20)),1000)
        
        expect(sale.calculateSalePrice()).toBe(19000)
    })

    it("updateQuantity", () => {
        const sale = new Sale(new StockItem("item",19,new Date(2023,3,20)),1000)
        
        sale.updateQuantity(2)
        expect(sale.item.quantity).toBe(2)
    })

    it("updateExpiryDate", () => {
        const sale = new Sale(new StockItem("item",19,new Date(2023,3,20)),1000)
        
        sale.updateExpiryDate(new Date(2023,4,20))
        expect(sale.item.expiryDate).toStrictEqual(new Date(2023,4,20))
    })

    it("getSaleDetails", () => {
        const sale = new Sale(new StockItem("item",19,new Date(2023,3,20)),1000)
        
        sale.getSaleDetails()
        expect(sale.getSaleDetails()).toEqual({
            "item":{
                "name":"item",
                "quantity":19,
                "expiryDate":new Date(2023,3,20)
            },
            "price":1000
        })
    })
});
