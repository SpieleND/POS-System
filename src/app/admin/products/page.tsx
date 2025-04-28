'use client'

import { handleAddProduct } from '@/app/lib/add-product'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function ProductsAdminPage() {
  const [newProduct, setNewProduct] = useState({ name: '', buy: 0, sell: 0 })
  const router = useRouter()

  const handleInputChange = (field: string, value: string | number) => {
    setNewProduct((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div>
      <Button onClick={() => router.back()}>Zurück</Button>
      <h1>Product Management</h1>
      <h2>Add New Product</h2>
      <TextField
        label="Name"
        value={newProduct.name}
        onChange={(e) => handleInputChange('name', e.target.value)}
      />
      <TextField
        label="Buy Price"
        type="number"
        value={newProduct.buy}
        onChange={(e) => handleInputChange('buy', parseFloat(e.target.value))}
      />
      <TextField
        label="Sell Price"
        type="number"
        value={newProduct.sell}
        onChange={(e) => handleInputChange('sell', parseFloat(e.target.value))}
      />
      <Button
        onClick={async () =>
          await handleAddProduct(
            newProduct.name,
            newProduct.buy,
            newProduct.sell,
          )
        }
      >
        Add Product
      </Button>
    </div>
  )
}
