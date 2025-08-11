'use client'

import Form from 'next/form'
import { Card, CardContent, Typography, TextField, Button } from '@mui/material'
import { addProduct } from '@/app/lib/ProductService'

const AddProductForm = () => {
  return (
    <Card style={{ flex: 1 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Product Management
        </Typography>
        <Typography variant="h6">Add New Product</Typography>
        <Form action={addProduct}>
          <TextField
            name="name"
            label="Name"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            name="buyPrice"
            label="Buy Price"
            type="number"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            name="sellPrice"
            label="Sell Price"
            type="number"
            fullWidth
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: '1rem' }}
          >
            Add Product
          </Button>
        </Form>
      </CardContent>
    </Card>
  )
}

export default AddProductForm
