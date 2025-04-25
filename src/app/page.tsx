import prisma from '@/lib/prisma';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import Image from 'next/image';

export default async function Home() {
  try {
    await prisma.$connect();
  } catch (error) {
    return (
      <Dialog
        open={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Missing database connection'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            No Database connection could be established. Use `docker compose up`
            to start the database.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  }

  const products = await prisma.product.findMany();

  return (
    <Stack
      width={'100%'}
      height={'100%'}
      padding={2}
      gap={2}
    >
      <Stack direction="row" alignItems={'center'}>
        <Image
          src={'/images/logo.png'}
          alt="Logo"
          width={200}
          height={100}
          layout="intrinsic"
        />
        <h1> - POS</h1>
      </Stack>
      <Grid container spacing={2} height={'100%'} >
        <Grid size={'grow'}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {products.map((product, index) => (
              <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="images/products/water.png"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary' }}
                      >
                        {new Intl.NumberFormat('de-DE', {
                          style: 'currency',
                          currency: 'EUR',
                        }).format(product.sell)}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid size={4}>
          <Box padding={2} height={'100%'} alignContent={'end'}>
            <List>
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
            </List>
            <Stack direction={'row'}>
              <Button variant="contained">Bezahlen</Button>
              <Button variant="outlined">Abbruch</Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}
