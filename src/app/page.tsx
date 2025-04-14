import prisma from '@/lib/prisma'
import { Button } from '@mui/material';

export default async function Home() {
  const products = (await prisma.product.findMany());
  return (
    <div>
      <h1>
        Kassensystem
      </h1>
        {products.map((product) => (
            <Button key={product.id}>
            {product.name}
            </Button>
        ))}
    </div>
  );
}
