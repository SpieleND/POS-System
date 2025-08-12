'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const addProduct = async (formData: FormData) => {
  const name = formData.get('name') as string
  const buyPrice = parseFloat(formData.get('buyPrice') as string)
  const sellPrice = parseFloat(formData.get('sellPrice') as string)

  await prisma.product.create({
    data: {
      name,
      buy: buyPrice,
      sell: sellPrice,
    },
  })

  revalidatePath('/admin/products')
  redirect('/admin/products')
}