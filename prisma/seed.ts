import { PrismaClient } from '../src/app/generated/prisma'

const prisma = new PrismaClient()

export async function main() {
  
  // Seed Roles
  const adminRole = await prisma.role.create({
    data: {
      name: 'Admin',
    },
  })
  
  const userRole = await prisma.role.create({
    data: {
      name: 'User',
    },
  })
  

  // Seed Users
  const adminUser = await prisma.user.create({
    data: {
      username: 'admin',
      role: { connect: { id: adminRole.id } },
    },
  })

  const regularUser = await prisma.user.create({
    data: {
      username: 'user1',
      role: { connect: { id: userRole.id } },
    },
  })

  // Seed Products
  const product1 = await prisma.product.create({
    data: {
      name: 'Product A',
      buy: 10.0,
      sell: 15.0,
    },
  })

  const product2 = await prisma.product.create({
    data: {
      name: 'Product B',
      buy: 20.0,
      sell: 30.0,
    },
  })

  // Seed Orders and OrderItems
  const order1 = await prisma.order.create({
    data: {
      user: { connect: { id: adminUser.id } },
      paid: true,
      approved: true,
      createdBy: 'system',
      updatedBy: 'system',
      items: {
        create: [
          {
            product: { connect: { id: product1.id } },
            quantity: 2,
          },
        ],
      },
    },
  })

  const order2 = await prisma.order.create({
    data: {
      user: { connect: { id: regularUser.id } },
      paid: false,
      approved: false,
      createdBy: 'system',
      updatedBy: 'system',
      items: {
        create: [
          {
            product: { connect: { id: product2.id } },
            quantity: 1,
          },
        ],
      },
    },
  })
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