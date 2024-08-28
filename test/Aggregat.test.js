import { prismaClient } from "../src/GlobalPrisma.js"

describe("start aggregate" , () => {
    it("value aggregrate" , async () => {
        const result = await prismaClient.product.aggregate({
            _min : {
                price : true
            }, 
            _max : {
                price : true
            }
        })
        expect(result._min.price).toBe(10000)
        expect(result._max.price).toBe(80000)
        // expect(result._avg.price).toBe(70000)
        // expect(result._max.PRICE).toBe(790000)

    })


})