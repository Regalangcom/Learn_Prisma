import { prismaClient } from "../src/GlobalPrisma";

describe("testing", function () {
  // it("testing datas manytomany", async function () {
  //   const likes = await prismaClient.like.create({
  //     data: {
  //       customer_id: "galangjs",
  //       products_id: "P001",
  //     },
  //     include: {
  //       customer: true,
  //       product: true,
  //     },
  //   });

  //   console.log(likes);
  // });

  // it("", async function () {
  //   const findUniq = await prismaClient.customer.findUnique({
  //     where: {
  //       id: "galangjs",
  //     },
  //     include: {
  //       likes: {
  //         include: {
  //           product: true,
  //         },
  //       },
  //     },
  //   });
  //   console.log(JSON.stringify(findUniq));
  // });

  // it("", async function () {
  //   const findMany = await prismaClient.customer.findMany({
  //     where: {
  //       likes: {
  //         some: {
  //           product: {
  //             name_product: {
  //               contains: "S",
  //             },
  //           },
  //         },
  //       },
  //     },
  //     include: {
  //       likes: {
  //         include: {
  //           product: true,
  //         },
  //       },
  //     },
  //   });
  //   console.log(JSON.stringify(findMany));
  // });

  it("implicit", async function () {
    const Implicits = await prismaClient.customer.update({
      where: {
        id: "galangjs",
      },
      data: {
        loves: {
          connect: [{ id: "P001" }],
        },
      },

      include: {
        loves: true,
      },
    });
    console.log(Implicits);
  });
});
