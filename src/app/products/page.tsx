'use client'

import { Grid, Stack } from '@mui/material'
import { createContext, useState } from 'react'
import Header from '../components/Header'
import OrderItemsSidebar from '../components/OrderItemsSidebar'
import ProductGrid from '../components/ProductGrid'
import { OrderItem, Product } from '../generated/prisma'

interface OrderContextType {
  orderItems: number[]
  addItem: (item: number) => void
}

interface ProductsPageProps {
  products: Product[]
}

export const OrderContext = createContext<OrderContextType>(
  {} as OrderContextType,
)

export default function ProductsPage({ products }: ProductsPageProps) {
  const [orderItems, setOrderItems] = useState<number[]>([])

  const addOrderItem = (item: number) => {
    setOrderItems((prevItems) => [...prevItems, item])
  }

  return (
    <OrderContext.Provider value={{ orderItems, addItem: addOrderItem }}>
      <Stack width={'100%'} height={'100%'} padding={2} gap={2}>
        <Header />
        <Grid container spacing={2} height={'100%'}>
          <Grid size={'grow'}>
            <ProductGrid products={products} />
          </Grid>
          <Grid size={4}>
            <OrderItemsSidebar />
          </Grid>
        </Grid>
      </Stack>
    </OrderContext.Provider>
  )
}
