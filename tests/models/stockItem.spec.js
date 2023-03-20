import { Dairy, Meat, Produce, StockItem } from "../../models/stockItem";

describe("stockItemParent", () => {
    it("constructor", () => {
        const stockItem = new StockItem("item",10,new Date(2023,3,20))

        expect(stockItem.name).toBe("item")
        expect(stockItem.quantity).toBe(10)
        expect(stockItem.expiryDate).toStrictEqual(new Date(2023,3,20))
    })
});

describe("stockItemDairy", () => {
    it("constructor", () => {
        const stockItem = new Dairy("item",10,new Date(2023,3,20))

        expect(stockItem.name).toBe("item")
        expect(stockItem.quantity).toBe(10)
        expect(stockItem.expiryDate).toStrictEqual(new Date(2023,3,20))
        expect(stockItem.type).toBe('Dairy')
    })
});

describe("stockItemMeat", () => {
    it("constructor", () => {
        const stockItem = new Meat("item",10,new Date(2023,3,20))

        expect(stockItem.name).toBe("item")
        expect(stockItem.quantity).toBe(10)
        expect(stockItem.expiryDate).toStrictEqual(new Date(2023,3,20))
        expect(stockItem.type).toBe('Meat')
    })
});

describe("stockItemProduce", () => {
    it("constructor", () => {
        const stockItem = new Produce("item",10,new Date(2023,3,20))

        expect(stockItem.name).toBe("item")
        expect(stockItem.quantity).toBe(10)
        expect(stockItem.expiryDate).toStrictEqual(new Date(2023,3,20))
        expect(stockItem.type).toBe('Produce')
    })
});