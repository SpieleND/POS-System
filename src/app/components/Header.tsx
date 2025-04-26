import { Stack, Typography } from '@mui/material';
import Image from 'next/image';

export default function Header() {
  return (
    <Stack direction="row" alignItems={'center'}>
      <Image
        src={'/images/logo.png'}
        alt="Logo"
        width={200}
        height={100}
        layout="intrinsic"
      />
      <Typography variant="h4">POS</Typography>
    </Stack>
  );
}
