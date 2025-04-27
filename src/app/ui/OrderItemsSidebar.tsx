'use client'

import { ShoppingCartOutlined } from '@mui/icons-material'
import {
  Alert,
  Button,
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'
import { grey } from '@mui/material/colors'
import { useContext } from 'react'
import { TransitionGroup } from 'react-transition-group'
import { Product } from '../generated/prisma'
import { toEuro } from '../lib/to-euro'
import { CartOrderItem, OrderContext } from '../products/page'

const sumOrderItems = (orderItems: CartOrderItem[], products: Product[]) => {
  return orderItems.reduce((sum, item) => {
    const product = products.find((product) => product.id === item.productId)
    if (product) {
      return sum + product.sell * item.amount
    }
    return sum
  }, 0)
}

export default function OrderItemsSidebar() {
  const { orderItems, products, resetOrderItems, removeItem } =
    useContext(OrderContext)

  return (
    <Stack gap={2} height={'100%'}>
      <List style={{ flexGrow: 1, alignContent: 'end' }}>
        {orderItems.length > 0 ? (
          <TransitionGroup>
            {orderItems.map((item, index) => {
              const product = products.find(
                (product) => product.id === item.productId,
              )
              if (!product)
                return (
                  <Collapse key={index}>
                    <Alert severity="error">Product Id not found.</Alert>
                  </Collapse>
                )

              return (
                <Collapse key={index}>
                  <ListItemButton onClick={() => removeItem(product.id)}>
                    <ListItemIcon>
                      <ShoppingCartOutlined />
                    </ListItemIcon>
                    <ListItemText
                      primary={product.name}
                      secondary={toEuro(product.sell)}
                    />
                    <Typography variant="h5" color={grey[500]}>
                      x{item.amount}
                    </Typography>
                  </ListItemButton>
                </Collapse>
              )
            })}
          </TransitionGroup>
        ) : (
          <Typography color={grey[500]} variant="body2">
            Kein Produkt ausgewählt
          </Typography>
        )}
      </List>
      <Divider />
      <Stack direction={'row'} justifyContent={'space-between'} padding={2}>
        <Typography variant="h6">Summe:</Typography>
        <Typography variant="h6">
          {toEuro(sumOrderItems(orderItems, products))}
        </Typography>
      </Stack>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Button variant="contained">Bezahlen</Button>
        <Button variant="outlined" onClick={() => resetOrderItems()}>
          Abbruch
        </Button>
      </Stack>
    </Stack>
  )
}
