'use client'

import { deleteProduct } from '@/app/api/products/deleteProduct'
import { updateProduct } from '@/app/api/products/updateProduct'
import { Product } from '@/app/generated/prisma'
import { Delete, Edit } from '@mui/icons-material'
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material'
import Form from 'next/form'
import { FC, useState } from 'react'

interface ProductTableProps {
  products: Product[]
}

export const ProductTable: FC<ProductTableProps> = ({ products }) => {
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false)
  const [selectedProduct, setSelectedProduct] =
    useState<Partial<Product> | null>(null)

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Buy Price</TableCell>
            <TableCell>Sell Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} align="center">
                No products available
              </TableCell>
            </TableRow>
          ) : (
            products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.buy}</TableCell>
                <TableCell>{product.sell}</TableCell>
                <TableCell>
                  <Stack alignItems={'center'} direction={'row'} spacing={1}>
                    <Edit
                      onClick={() => {
                        setSelectedProduct(product)
                        setOpenUpdateDialog(true)
                      }}
                      color='secondary'
                    />
                    <form
                      action={async () => {
                        await deleteProduct(product.id)
                      }}
                    >
                      <Button type="submit" color="error">
                        <Delete />
                      </Button>
                    </form>
                  </Stack>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <Dialog
        open={openUpdateDialog}
        onClose={() => setOpenUpdateDialog(false)}
      >
        <DialogTitle>{'Bearbeite Produkt'}</DialogTitle>
        <DialogContent>
          <Form
            action={async (formData: FormData) => {
              await updateProduct(selectedProduct!.id!, formData)
              setSelectedProduct(null)
              setOpenUpdateDialog(false)
            }}
          >
            <TextField
              name="name"
              label="Name"
              defaultValue={selectedProduct?.name}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              name="buyPrice"
              label="Buy Price"
              type="number"
              defaultValue={selectedProduct?.buy}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              name="sellPrice"
              label="Sell Price"
              type="number"
              defaultValue={selectedProduct?.sell}
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
              Speichern
            </Button>
          </Form>
        </DialogContent>
      </Dialog>
    </TableContainer>
  )
}
