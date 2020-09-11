import React from 'react'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import {useState} from 'react'

const AddMusic = () => {
    /*const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [rate, setRate] = useState('');*/
    return(
        <div>
            <div>제목 : <TextField/></div>
            <div>장르 : <TextField/></div>
            <div>rate : <Checkbox/></div>
        </div>
    )
}
export default AddMusic;