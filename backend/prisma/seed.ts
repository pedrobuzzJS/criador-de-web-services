import { Prisma, PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
    await console.log(`Start seeding ...`);
    
    const passwordHash = await hash("admin", 8);

    const userData: Prisma.UsersCreateInput[] = [
        {
            name: "admin",
            username: "admin",
            email: "admin@admin.com",
            email_verified: false,
            password: passwordHash,
            status: {
              connectOrCreate: {
                where: {
                  id: 1
                },
                create: {
                  nome: "Ativo",
                  descricao: "Ativo"
                }
              }
            }
        }
    ];

    const tipoWebServiceData: Prisma.TipoWebServiceCreateInput[] = [
      {
        id: 1,
        nome: "JSON",
        sigla: "JS",
        descricao: "WebService via REST",
        status: {
          connectOrCreate: {
            where: {
              id: 1
            },
            create: {
              nome: "Ativo",
              descricao: "Ativo"
            }
          }
        }
      }
    ];
    
    for (const u of userData) {
      const user = await prisma.users.create({
        data: u
      });
      console.log(`Created user with id: ${user.id}`);
    };

    for (const t of tipoWebServiceData) {
      const tipoWs = await prisma.tipoWebService.create(
        {
          data: t
        }
      );
      console.log(`Created TipoWebServise with id: ${tipoWs.id}`);
    };
    console.log("Seeding Complete");
  };
  
  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    });