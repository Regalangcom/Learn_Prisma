import { prismaClient } from "../src/GlobalPrisma"


// describe('crud many' , () => {
//     it("crud many records" , async () => {
//        const {count} = await prismaClient.customer.createMany({
//                 data : [
//                     {
//                         id : "34",
//                         name : "test1",
//                         email : "galangGanteng21@gmail.com",
//                         phone : "90909090908"
//                     }, 
//                     {
//                         id : "39",
//                         name : "test2",
//                         email : "galangGanteng20@gmail.com",
//                         phone : "90909090900"
//                     },
//                 ] 
//             })

//             expect(count).toBe(2)
//     })
// })

// describe('crud many', () => {
//     it("update many records", async () => {
      
//         const { count: count1 } = await prismaClient.customer.updateMany({
//             where: { name: "test1" },
//             data: { email: "koko907@gmail.com" }
//         });

//         const { count: count2 } = await prismaClient.customer.updateMany({
//             where: { name: "test2" },
//             data: { email: "kokol12@gmail.com" }
//         });

//         // Ensure both updates were successful
//         expect(count1 + count2).toBe(2);
//     });
// });


// describe('crud many', () => {
//     it("delete many records", async () => {
      
//         const { count } = await prismaClient.customer.deleteMany({
//             where: { name: "test1" },
            
//         });

//         // Ensure both updates were successful
//         expect(count).toBe(1);
//     });
// });

// describe('crud many', () => {
//     it("can many records", async () => {
      
//        const customer = await prismaClient.customer.findMany({});
//         console.log(customer);


//         expect(customer.length).toBe(11);
//     });
// });

// describe('crud many', () => {
//     it("paging", async () => {
      
//        const page1 = await prismaClient.customer.findMany({
//         skip : 0,
//         take : 1
//        });
//        console.log(page1);
//         expect(page1.length).toBe(1)

//        const page2 = await prismaClient.customer.findMany({
//         skip : 1,
// take : jumlah maksimal data yang mau di ambil 
// skip jumlah data yang akan di skip di awal
//         take : 1
//        });
//        console.log(page2);
//        expect(page2.length).toBe(1)

//        const page3 = await prismaClient.customer.findMany({
//         skip : 2,
//         take : 1
//        });
//        console.log(page3);
//        expect(page3.length).toBe(1)

//     });
// });

// describe('crud many', () => {
//     it("paging", async () => {
        
//             const customer = await prismaClient.customer.findMany({
//                 skip : 0,
//                 take : 11,

//                 orderBy : [
//                     {
//                         name : "desc"
//                     },
//                     {
//                         email : "asc"
//                     }
//                 ]
//             })
//             console.info(customer);
//     });
// });

describe('select field ', () => {
    it("paging", async () => {
        
            const customer = await prismaClient.customer.create({
                data : 
                {
                    id : "80",
                    name : "select1",
                    email : "galangGanteng099@gmail.com",
                    phone : "09876545"
                },  
                select : {
                    id : true,
                    name : true
                }
        });

        expect(customer.id).toBe("80")
        expect(customer.name).toBe("select1")
        expect(customer.email).toBeUndefined()
        expect(customer.phone).toBeUndefined()

    });
})
