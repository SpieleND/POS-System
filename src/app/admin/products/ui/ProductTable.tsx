'use client'

import { Product } from '@/app/generated/prisma'
import { deleteProduct } from '@/app/lib/ProductService'
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { FC } from 'react'

interface ProductTableProps {
  products: Product[]
}

export const ProductTable: FC<ProductTableProps> = ({ products }) => {
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
                  <form
                    action={async () => {
                      await deleteProduct(product.id)
                    }}
                  >
                    <Button type="submit" color="secondary">
                      Delete
                    </Button>
                  </form>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
