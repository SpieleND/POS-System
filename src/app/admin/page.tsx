'use client'

import { Alert, Button, Snackbar } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import initDB from '../lib/init-db'

export default function AdminPage() {
  const router = useRouter()
  const [snackbarOpen, setSnackbarOpen] = useState(false)

  const handleInitDB = async () => {
    try {
      await initDB()
      setSnackbarOpen(true)
    } catch (error) {
      console.error('Error initializing database:', error)
    }
  }

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false)
  }

  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      padding={2}
    >
      <Grid>
        <Button onClick={handleInitDB} variant="contained">
          Initialize Database
        </Button>
      </Grid>
      <Grid>
        <Button
          onClick={async () => router.push('/admin/products')}
          variant="contained"
        >
          Produktverwaltung
        </Button>
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: '100%' }}
        >
          Datenbank wurde erfolgreich initialisiert!
        </Alert>
      </Snackbar>
    </Grid>
  )
}
