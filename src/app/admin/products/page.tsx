'use client'

import { handleAddProduct } from '@/app/lib/use-product'
import { Button, Card, CardContent, Stack, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ProductTable } from './ui/ProductTable'

export default function ProductsAdminPage() {
  const [newProduct, setNewProduct] = useState({ name: '', buy: 0, sell: 0 })
  const router = useRouter()

  const handleAddProductClick = async () => {
    if (!newProduct.name || newProduct.buy <= 0 || newProduct.sell <= 0) {
      alert('Please fill out all fields with valid values.')
      return
    }
    await handleAddProduct(newProduct.name, newProduct.buy, newProduct.sell)
  }

  return (
    <Stack style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
      <Button onClick={() => router.back()}>Zurück</Button>
      <Stack direction={'row'} padding={2} gap={2}>
        <Card style={{ flex: 1 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Product Management
            </Typography>
            <Typography variant="h6">Add New Product</Typography>
            <TextField
              label="Name"
              onChange={(e) =>
                setNewProduct((prev) => ({ ...prev, name: e.target.value }))
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Buy Price"
              type="number"
              onChange={(e) =>
                setNewProduct((prev) => ({
                  ...prev,
                  buy: parseFloat(e.target.value),
                }))
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Sell Price"
              type="number"
              onChange={(e) =>
                setNewProduct((prev) => ({
                  ...prev,
                  sell: parseFloat(e.target.value),
                }))
              }
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddProductClick}
              style={{ marginTop: '1rem' }}
            >
              Add Product
            </Button>
          </CardContent>
        </Card>
        <Stack style={{ flex: 2 }}>
          <Typography variant="h6">Product List</Typography>
          <ProductTable />
        </Stack>
      </Stack>
    </Stack>
  )
}
