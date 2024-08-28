import { prismaClient} from "../src/GlobalPrisma";



describe('should tag function execute sql ',   () => {
    it('data in query' ,  async () => {

        const id = "1"
    
        // const name = 'galang'
    
        //execute sql 
    
        const Datas = await prismaClient.$queryRaw`SELECT * FROM customers WHERE id = ${id}`;
    
        for (const data of Datas) {
            console.log(`result data : id  ${data.id} and ${data.name} , ${data.email} and ${data.phone} `);
            
        }
    
        console.log(Datas);
    })


    // tagFunction `SELECT * FROM users WHERE ${name} AND ${age} `




})
