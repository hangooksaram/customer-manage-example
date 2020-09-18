import React from 'react'
import { TableCell, Table, TableRow } from '@material-ui/core'
const Music = ({ title, genre, rate }) => {
    return (
        <div>
            <Table aria-label="simple table">
                <TableRow>
                    <TableCell align = 'right' >{title}</TableCell>
                    <TableCell align = 'right' >{genre}</TableCell>
                    <TableCell align = 'right' >{rate}</TableCell>
                </TableRow>
            </Table>
        </div>
    )
}

const styles = {
    container : {
        display : 'flex',
        flexDirection : 'row',
        width : '100%',
        justifyContent  : 'center'
    },
}

export default Music