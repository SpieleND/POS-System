'use server'

import prisma from '@/lib/prisma'

const useProducts = async  () => await prisma.product.findMany()

export const handleAddProduct = async (name: string, buy: number, sell: number) => {
  await prisma.product.create({
    data: {
      name: name,
      buy: buy,
      sell: sell,
    },
  })
}

export default useProducts
