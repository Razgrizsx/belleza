import { PrismaClient } from "@prisma/client";
("@prisma/client");

declare const global: any;

const client: any = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV === "production") global.prismadb = client;

export default client;
