'use client'

import { Grid, Stack } from '@mui/material'
import { createContext, useState } from 'react'
import Header from '../ui/Header'
import OrderItemsSidebar from '../ui/OrderItemsSidebar'
import ProductGrid from '../ui/ProductGrid'
import { OrderItem, Product } from '../generated/prisma'

export interface CartOrderItem {
  productId: number
  amount: number
}

interface OrderContextType {
  orderItems: CartOrderItem[]
  addItem: (item: number) => void
  removeItem: (item: number) => void
  resetOrderItems: () => void
  products: Product[]
}

interface ProductsPageProps {
  products: Product[]
}

export const OrderContext = createContext<OrderContextType>(
  {} as OrderContextType,
)

export default function ProductsPage({ products }: ProductsPageProps) {
  const [orderItems, setOrderItems] = useState<CartOrderItem[]>([])

  const addItem = (itemId: number) => {
    const existingItem = orderItems.find((item) => item.productId === itemId)
    if (existingItem) {
      setOrderItems((prev) =>
        prev.map((item) =>
          item.productId === itemId
            ? { ...item, amount: item.amount + 1 }
            : item,
        ),
      )
    } else {
      setOrderItems((prev) => [...prev, { productId: itemId, amount: 1 }])
    }
  }

  const removeItem = (itemId: number) => {
    const existingItem = orderItems.find((item) => item.productId === itemId)
    if (existingItem) {
      if (existingItem.amount > 1) {
        setOrderItems((prev) =>
          prev.map((item) =>
            item.productId === itemId
              ? { ...item, amount: item.amount - 1 }
              : item,
          ),
        )
      } else {
        setOrderItems((prev) => prev.filter((item) => item.productId !== itemId))
      }
    }
  }

  const resetOrderItems = () => {
    setOrderItems([])
  }


  return (
    <OrderContext.Provider value={{ orderItems, addItem, products, resetOrderItems, removeItem }}>
        <Grid container spacing={2} height={'100%'}>
          <Grid size={'grow'}>
            <ProductGrid products={products} />
          </Grid>
          <Grid size={4}>
            <OrderItemsSidebar />
          </Grid>
        </Grid>
    </OrderContext.Provider>
  )
}
