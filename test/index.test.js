import { prismaClient } from "../src/GlobalPrisma"


describe('prisma client' , () => {
    it ("test" , async () => {
        await prismaClient.$connect()
        
        //do something


        // await prismaClient.$disconnect()
    })  
        
})