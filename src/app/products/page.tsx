'use client';

import { Grid, Stack } from '@mui/material';
import ProductGrid from '../components/ProductGrid';
import Sidebar from '../components/Sidebar';
import { Product } from '../generated/prisma';
import Header from '../components/Header';

interface ProductPageProps {
  products: Product[];
}

export default function ProductsPage({ products }: ProductPageProps) {
  return (
    <Stack width={'100%'} height={'100%'} padding={2} gap={2}>
      <Header />
      <Grid container spacing={2} height={'100%'}>
        <Grid size={'grow'}>
          <ProductGrid products={products} />
        </Grid>
        <Grid size={4}>
          <Sidebar />
        </Grid>
      </Grid>
    </Stack>
  );
}
