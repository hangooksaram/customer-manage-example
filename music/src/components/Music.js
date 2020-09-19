import React from 'react'
import { TableCell, Table, TableRow } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/DeleteForever';
import MusicService from '../services/MusicService'
const Music = ({ id, title, genre, rate }) => {
    const deleteMusic = () => {
        MusicService.remove(id)
            .then(res => {
                console.log(res.data);
            })
            .catch(e => {
                console.log(e);
            })
    }
    return (
        <div>
            <Table>
                <TableRow>
                    <TableCell style = {styles.tableCell}>{title}</TableCell>
                    <TableCell style = {styles.tableCell}>{genre}</TableCell>
                    <TableCell style = {styles.tableCell}>{rate}</TableCell>
                    <TableCell><div onClick = {deleteMusic}><DeleteIcon fontSize = 'large'/></div></TableCell>
                </TableRow>
            </Table>
        </div>
    )
}

const styles = {
    tableCell : {
        width : '35%',
        textAlign : 'center',
        fontSize : 25
    },
}

export default Music