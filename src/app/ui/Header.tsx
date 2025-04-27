'use client'

import {
  AdminPanelSettingsOutlined,
  LockPersonOutlined,
} from '@mui/icons-material'
import { Stack, Typography, useTheme } from '@mui/material'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const theme = useTheme()
  const [openSpeedDial, setOpenSpeedDial] = useState(false)

  const actions = [
    {
      icon: <AdminPanelSettingsOutlined />,
      name: 'Administration',
      onClick: () => {},
    },
    {
      icon: <LockPersonOutlined />,
      name: 'Sperre Adminbereich',
      onClick: () => {
        setOpenSpeedDial(false)
      },
    },
  ]

  return (
    <Stack direction="row" justifyContent={'space-between'}>
      <Stack direction="row" alignItems="center">
        <Image
          src={'/images/logo.png'}
          alt="Logo"
          width={200}
          height={100}
          layout="intrinsic"
          onClick={() => setOpenSpeedDial(!openSpeedDial)}
        />
        <Typography variant="h4" marginTop={theme.spacing(2)}>
          POS
        </Typography>
      </Stack>
      {openSpeedDial && (
        <SpeedDial
          ariaLabel="SpeedDial example"
          icon={<SpeedDialIcon />}
          direction="left"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              slotProps={{ tooltip: { title: action.name } }}
              onClick={action.onClick}
            />
          ))}
        </SpeedDial>
      )}
    </Stack>
  )
}
