import React from 'react'
import { TableCell } from '@material-ui/core'
const Music = ({ id, title, genre, rate }) => {
    return (
        <div>
            <TableCell>{id}</TableCell>
            <TableCell>{title}</TableCell>
            <TableCell>{genre}</TableCell>
            <TableCell>{rate}</TableCell>
        </div>
    )
}

export default Music