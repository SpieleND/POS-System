'use server'

import prisma from '@/lib/prisma'

const initDB = async () => {
  if ((await prisma.role.findFirst({ where: { name: 'admin' } })) === null) {
    await prisma.role.create({
      data: { name: 'admin' },
    })
  }

  if ((await prisma.role.findFirst({ where: { name: 'user' } })) === null) {
    await prisma.role.create({
      data: { name: 'user' },
    })
  }

  if ((await prisma.role.findFirst({ where: { name: 'guest' } })) === null) {
    await prisma.role.create({
      data: { name: 'guest' },
    })
  }

  if (
    (await prisma.user.findFirst({ where: { username: 'Anonymous' } })) === null
  ) {
    await prisma.user.create({
      data: {
        username: 'Anonymous',
        role: { connect: { name: 'guest' } },
      },
    })
  }

  if (
    (await prisma.user.findFirst({ where: { username: 'ADMIN' } })) === null
  ) {
    await prisma.user.create({
      data: {
        username: 'ADMIN',
        role: { connect: { name: 'admin' } },
      },
    })
  }
}

export default initDB
