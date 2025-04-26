import { ShoppingCartOutlined } from '@mui/icons-material'
import {
  Alert,
  Button,
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
import { toEuro } from '../lib/to-euro'
import { OrderContext } from '../products/page'

export default function OrderItemsSidebar() {
  const { orderItems, products } = useContext(OrderContext)

  return (
    <Stack gap={2} height={'80%'} position={'absolute'}>
      <List style={{ flexGrow: 1, alignContent: 'end', overflow:'auto', position: 'relative' }}>
        {orderItems.length > 0 ? (
          orderItems.map((item, index) => {
            const product = products.find((product) => product.id === item)
            if (!product)
              return (
                <Alert key={index} severity="error">
                  Product Id not found.
                </Alert>
              )

            return (
              <ListItemButton key={index}>
                <ListItemIcon>
                  <ShoppingCartOutlined />
                </ListItemIcon>
                <ListItemText
                  primary={product.name}
                  secondary={toEuro(product.sell)}
                />
              </ListItemButton>
            )
          })
        ) : (
          <Typography color={grey[500]} variant="body2">
            Kein Produkt ausgewählt
          </Typography>
        )}
      </List>
      <Divider />
      <h3>Summe:</h3>
      <Stack direction={'row'}>
        <Button variant="contained">Bezahlen</Button>
        <Button variant="outlined">Abbruch</Button>
      </Stack>
    </Stack>
  )
}
