import { prismaClient } from "../src/GlobalPrisma"



// sequencial transaction
// describe("prisma client" , () => {
//     it("database transaction" ,  async () => {
//       const [muhammad ,gofur ] = await prismaClient.$transaction([
//                 prismaClient.customer.create({
//                     data : {
//                         id : "muhammad5",
//                         name : "muhammad_Galang",
//                         email : "galangPrisma5@gmail.com",
//                         phone :"0938w938293829825"
//                     }
//                 }),
//                 prismaClient.customer.create({
//                     data : {
//                         id : "gofur6",
//                         name : "muhammad_gofur",
//                         email : "gofurPrisma6@gmail.com",
//                         phone :"8787387287283726"
//                     }
//                 })


//         ], {
//           timeout : 5,
          
//         })


//         expect(muhammad.name).toBe("muhammad_Galang")
//         expect(gofur.name).toBe("muhammad_gofur")
//     })
// })


// interactive transaction
describe("prisma client" , () => {
    it("database transaction" ,  async () => {
      const [ muhammad ,gofur ] = await prismaClient.$transaction(async (prisma) => {
        const muhammad = await prisma.customer.create({
          data : {
              id : "muhammad14",
              name : "muhammad_Galang",
              email : "galangPrisma14@gmail.com",
              phone :"0938w9382938298211014"
          }
        }) 
        const gofur = await prisma.customer.create({
          data : {
              id : "gofur15",
              name : "muhammad_gofur",
              email : "gofurPrisma15@gmail.com",
              phone :"87873872872837221215"
          }
        })

        return [muhammad , gofur]

      } , {
          timeout : 60
      })


        expect(muhammad.name).toBe("muhammad_Galang")
        expect(gofur.name).toBe("muhammad_gofur")
    })
})