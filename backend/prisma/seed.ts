import { Prisma, PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
    await console.log(`Start seeding ...`)
    
    const passwordHash = await hash("admin", 8);

    const userData: Prisma.UsersCreateInput[] = [
        {
            name: "Pedro Artur Buzzi Pereira",
            username: "admin",
            email: "admin@admin.com",
            email_verified: false,
            password: passwordHash,
        },
        {
            name: "Pedro Artur Buzzi Pereira",
            username: "admin2",
            email: "admin2@admin.com",
            email_verified: false,
            password: passwordHash,
        }
    ]
    
    for (const u of userData) {
      const user = await prisma.users.create({
        data: u
      })
      console.log(`Created user with id: ${user.id}`)
    }
    console.log(`Seeding finished.`)
  }
  
  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })