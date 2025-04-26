import { Grid } from '@mui/material';
import ProductCard from './ProductCard';

export default function ProductGrid({
  products,
}: {
  products: { name: string; sell: number }[];
}) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {products.map((product, index) => (
        <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
