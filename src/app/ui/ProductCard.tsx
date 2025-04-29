'use client'

import { Add, AddCircleOutline } from '@mui/icons-material'
import { grey } from '@mui/material/colors'
import { useContext } from 'react'
import { Product } from '../generated/prisma'
import { toEuro } from '../lib/to-euro'
import { OrderContext } from '../products/page'
import { Card, CardActionArea, CardMedia, CardContent, Grid, Typography } from '@mui/material'

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useContext(OrderContext)

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
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {toEuro(product.sell)}
              </Typography>
            </Grid>
            <Grid>
              <Add fontSize='large' sx={{color: grey[500]}} />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
