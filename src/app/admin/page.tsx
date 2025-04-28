'use client'

import { Button } from '@mui/material'
import Grid from '@mui/material/Grid'
import initDB from '../lib/init-db'

export default function AdminPage() {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      padding={2}
    >
      <Grid size={6}>
        <Button
          onClick={async () => {
            await initDB()
          }}
          variant="contained"
        >
          Initialize Database
        </Button>
      </Grid>
    </Grid>
  )
}
