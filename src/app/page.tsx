import prisma from '@/lib/prisma'
import OrdersPage from './orders/page'

export default async function Home() {
  try {
    await prisma.$connect()
  } catch (error) {
    return (
      <div>
        <h1>Missing database connection</h1>
        <p>
          No Database connection could be established. Use `docker compose up`
          to start the database.
        </p>
      </div>
    )
  }


  const products = await prisma.product.findMany()

  return <OrdersPage products={products} />
}
