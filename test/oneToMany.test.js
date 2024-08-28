import { prismaClient } from "../src/GlobalPrisma";

describe("", function () {
  //   it("testing", async function () {
  //     const comments = await prismaClient.comment.create({
  //       data: {
  //         customer_id: "muhammad14",
  //         title: "inset commets",
  //         description: "inseert description",
  //       },
  //       include: {
  //         customer: true,
  //       },
  //     });

  //     console.info(comments);
  //   });

  // it("create can insert and many relation", async () => {
  //   const customer = await prismaClient.customer.create({
  //     data: {
  //       id: "galangjs",
  //       name: "galangjs",
  //       email: "galangjs@gmail.com",
  //       phone: "0987654321",
  //       comments: {
  //         createMany: {
  //           data: [
  //             {
  //               title: "comment4",
  //               description: "description3",
  //             },
  //             {
  //               title: "comment3",
  //               description: "description3",
  //             },
  //           ],
  //         },
  //       },
  //     },
  //     include: {
  //       comments: true,
  //     },
  //   });

  //   console.info(customer);
  // });

  it("find many datas", async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        comments: {
          // "some" di gunakan untuk mencari beberapa data
          some: {
            title: {
              contains: "Comments",
            },
          },
        },
      },
      include: {
        comments: true,
      },
    });

    console.log(JSON.stringify(customer));
  });
});
