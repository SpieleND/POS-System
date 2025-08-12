import { getAllProducts } from '@/app/api/products/getAllProducts'
import BackButton from '@/app/util/backButton'
import { Stack, Typography } from '@mui/material'
import AddProductForm from './ui/AddProductForm'
import { ProductTable } from './ui/ProductTable'

const ProductsAdminPage = async () => {
  const products = await getAllProducts()

  return (
    <Stack style={{ alignItems: 'flex-start', padding: '0 2rem' }}>
      <BackButton />
      <Typography variant="h5" gutterBottom>
        Product Management
      </Typography>
      <Stack style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
        <Stack direction={'row'} gap={2}>
          <AddProductForm />
          <Stack style={{ flex: 2 }}>
            <Typography variant="h6">Product List</Typography>
            <ProductTable products={products} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default ProductsAdminPage
