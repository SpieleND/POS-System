'use client'

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { useContext } from 'react'
import { Product } from '../generated/prisma'
import { OrderContext } from '../products/page'
import { toEuro } from '../lib/to-euro'

export default function ProductCard({ product }: { product: Product }) {
  const {addItem} = useContext(OrderContext)

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => addItem(product.id)}>
        <CardMedia
          component="img"
          height="140"
          image="images/products/water.png"
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {toEuro(product.sell)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
