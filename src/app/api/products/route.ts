// import { prisma } from "@/lib/prisma";
// import { NextRequest, NextResponse } from "next/server";

// const getAll = async (skip: number, take: number, search: string | null) => {
//   // if (search) {
//   //   search = normalizeString(search);
//   // }
//   if (!search) {
//     const [products, total] = await prisma.$transaction([
//       prisma.product.findMany({
//         skip,
//         take,
//         include: {
//           category: true,
//         },
//         orderBy: {
//           created: "desc",
//         },
//       }),
//       prisma.product.count(),
//     ]);
//     const totalPage = Math.ceil(total / take);
//     return { total, totalPage, products };
//   } else {
//     const [products, total] = await prisma.$transaction([
//       prisma.product.findMany({
//         where: {
//           OR: [
//             {
//               // name: {
//               //   contains: search,
//               //   mode: "insensitive",
//               // },
//               //   sku: {
//               //     contains: search,
//               //   },
//               // category: {
//               //   name: {
//               //     contains: search,
//               //     mode: "insensitive",
//               //   },
//               // },
//               slug: {
//                 contains: search,
//                 mode: "insensitive",
//               },
//             },
//           ],
//         },
//         skip,
//         take,
//         include: {
//           category: true,
//         },
//         orderBy: {
//           created: "desc",
//         },
//       }),
//       prisma.product.count({
//         where: {
//           OR: [
//             {
//               // name: {
//               //   contains: search,
//               //   mode: "insensitive",
//               // },
//               //   sku: {
//               //     contains: search,
//               //   },
//               // category: {
//               //   name: {
//               //     contains: search,
//               //     mode: "insensitive",
//               //   },
//               // },
//               slug: {
//                 contains: search,
//                 mode: "insensitive",
//               },
//             },
//           ],
//         },
//       }),
//     ]);
//     const totalPage = Math.ceil(total / take);
//     return { total, totalPage, products };
//   }
// };

// export async function GET(request: NextRequest) {
//   try {
//     const skip = Number(request.nextUrl.searchParams.get("skip"));
//     const take = Number(request.nextUrl.searchParams.get("take"));
//     const search = request.nextUrl.searchParams.get("search")
//       ? String(request.nextUrl.searchParams.get("search"))
//       : null;

//     const products = await getAll(skip, take, search);

//     return NextResponse.json(products);
//   } catch (e) {
//     return NextResponse.json(e);
//   }
// }

// export async function POST(request: Request) {
//   const body = await request.formData();
//   const files = body.getAll("images");

//   const name = String(body.get("name"));
//   const description = String(body.get("description"));
//   const sku = String(body.get("sku"));
//   const promotion = String(body.get("promotion"));
//   const slug = String(body.get("slug"));
//   const category = Number(body.get("category"));

//   const subCategories = body.getAll("subCategories");

//   if (!name || !description || !sku || !promotion || !slug || !category) {
//     return NextResponse.json({
//       success: false,
//       message: "Preencha todos os campos!",
//     });
//   }

//   // Validar que todos os arquivos são imagens
//   const invalidFiles = files.filter(
//     (file: any) => !file.type.startsWith("image/")
//   );

//   if (invalidFiles.length > 0) {
//     return NextResponse.json({
//       success: false,
//       message: "Apenas arquivos de imagem são permitidos.",
//       invalidFiles: invalidFiles.map((file: any) => file.name),
//     });
//   }

//   const currentDate = new Date();
//   const year = currentDate.getFullYear();
//   const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // +1 porque os meses começam de 0

//   try {
//     const product = await prisma.product.create({
//       data: {
//         name: name,
//         description: description,
//         sku: sku,
//         promotion: promotion === "true" ? true : false,
//         slug: slug,
//         category: {
//           connect: {
//             id: category,
//           },
//         },
//         imageUrls: files.map((file: any) => `/${year}/${month}/${file.name}`),
//       },
//     });

//     const subcategoryLinks = subCategories.map((id: any) => ({
//       productId: product.id,
//       subcategoryId: Number(id),
//     }));

//     await prisma.productSubcategory.createMany({
//       data: subcategoryLinks,
//     });

//     return NextResponse.json({
//       success: true,
//       message: "Produto cadastrado com sucesso!",
//     });
//   } catch (e) {
//     return NextResponse.json(e);
//   }
// }