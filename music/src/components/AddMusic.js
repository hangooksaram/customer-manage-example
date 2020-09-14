import React from 'react'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import { useState } from 'react'

const AddMusic = () => {
    const [musicdata, setMusicData] = useState({
        title : '', 
        genre : '', 
        rate : ''
    });

    const onChangeTitle = e => {
        setMusicData({...musicdata, title : e.target.value})
    }
    const onChangeGenre = e => {
        setMusicData({...musicdata, genre : e.target.value})
    }
    const onChangeRate = e => {
        setMusicData({...musicdata, rate : e.target.value})
    }

    const AddMusic = async () => {
        const response = fetch('http://localhost:3000/musicdata')
    }

    const onSave = () => {

    }
    
    return (
        <div>
            <div>제목 : <TextField value={musicdata.title} onChange={(e) => onChangeTitle(e)} /></div>
            <div>장르 : <TextField value={musicdata.genre} onChange={(e) => onChangeGenre(e)} /></div>
            <div>rate : <TextField value={musicdata.rate} onChange={(e) => onChangeRate(e)} /></div>
            <Button onKeyPress = {onSave}>저장</Button>
            {console.log(musicdata)}
        </div>
    )
}
export default AddMusic;