import {
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
} from '@mui/material'
import { useContext } from 'react'
import { OrderContext } from '../products/page'

export default function OrderItemsSidebar() {
  const { orderItems } = useContext(OrderContext)

  return (
    <Stack gap={2} height={'100%'}>
      <List style={{ flexGrow: 1, alignContent: 'end'}}>
        <ListItem>
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
        {...orderItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText primary={item} secondary="Jan 9, 2014" />
          </ListItem>
        ))}
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
