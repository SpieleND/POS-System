'use client'

import { Button, ButtonOwnProps, ButtonProps, ButtonTypeMap, ExtendButtonBase } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FC } from "react"

const BackButton: FC<ButtonProps>  = (props) => {
    const router = useRouter()
    return (
        <Button {...props} onClick={() => router.back()}>Zurück</Button>
    )

}

export default BackButton