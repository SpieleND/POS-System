import { Stack, Typography } from '@mui/material'
import AddProductForm from './ui/AddProductForm'
import { ProductTable } from './ui/ProductTable'
import { getAllProducts } from '@/app/lib/ProductService'

const ProductsAdminPage = async () => {
  const products = await getAllProducts()

  return (
    <Stack style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
      <Stack direction={'row'} padding={2} gap={2}>
        <AddProductForm />
        <Stack style={{ flex: 2 }}>
          <Typography variant="h6">Product List</Typography>
          <ProductTable products={products} />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default ProductsAdminPage
