

import { prismaClient } from "../src/GlobalPrisma"

// describe("prisma" , () => {
//     it("addData" ,  async () => {
//         // generate field customer(model yang kita buat di model schema)
//             const customers = await prismaClient.customer.create({
//                 data : {
//                     id:"4",
//                     name : "galang90",
//                     email : "galangmiftah4@gmail.com",
//                     phone : '0821116485844'
//                 }
//             })

        // operasi update
        // const customers = await prismaClient.customer.update({
        //     data : {
        //         name : "galangUpdate"
        //     },
        //     where : {
        //         id : "1"
        //     }
        
        // })
        // console.log(customers);

        // read customers / select 
        //     const customers = await prismaClient.customer.findUnique({
        //     where : {
        //         id : "1"
//         //     }
//         // })
//         // console.log(customers); 

//         // delete customers
//         // const customersDelete = await prismaClient.customer.delete({
//         //     where : {
//         //         id : "1"
//         //     }
//         // })
//         // console.log(customersDelete); 

//         //     expect(customersDelete.id).toBe("1");
//         //     expect(customersDelete.name).toBe("galangUpdate");
//         //     expect(customersDelete.email).toBe("galangmiftah@gmail.com");
//         //     expect(customersDelete.phone).toBe("082111648584")

//         expect(customers.id).toBe("4")
//         expect(customers.name).toBe("galang90")
//         expect(customers.email).toBe("galangmiftah4@gmail.com")
//         expect(customers.phone).toBe("0821116485844")

//     });
// });


it("autoincrement" , async () => {
     const indentitas = await prismaClient.identitas.create({
        data : {
            name_warga : "juliha",
            alamat : "cilegon"
        }
     })

     console.log(indentitas);
     expect(indentitas).toHaveProperty("id");
})



