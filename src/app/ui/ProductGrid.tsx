'use client'

import { Grid, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { Product } from '../generated/prisma'
import ProductCard from './ProductCard'

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {products.length > 0 ? (
        products.map((product, index) => (
          <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
            <ProductCard product={product} />
          </Grid>
        ))
      ) : (
        <Typography color={grey[500]} variant="body2"> 
          Keine Produkte vorhanden
        </Typography>
      )}
    </Grid>
  )
}
