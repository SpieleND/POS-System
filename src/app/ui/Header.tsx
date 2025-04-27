'use client'

import { Stack, Typography, useTheme } from '@mui/material';
import Image from 'next/image';

export default function Header() {
  const theme = useTheme();

  return (
    <Stack direction="row" alignItems="center">
      <Image
        src={'/images/logo.png'}
        alt="Logo"
        width={200}
        height={100}
        layout="intrinsic"
      />
      <Typography variant="h4" marginTop={theme.spacing(2)}>
        POS
      </Typography>
    </Stack>
  );
}
