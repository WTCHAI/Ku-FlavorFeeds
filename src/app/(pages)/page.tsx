import React from 'react'

import { redirect } from 'next/navigation'

type Props = {}

export default function page({}: Props) {
    return (
        redirect('/home')
    )
}