/*import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MusicDataService from '../services/MusicService';
import { useState } from 'react'

const AddMusic = () => {
    const [musicdata, setMusicData] = useState({
        id : null,
        title : '', 
        genre : '', 
        rate : ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setMusicData({...musicdata, [name] : value})
    }

    const onSave = () => {
        let data = {
            title : musicdata.title,
            genre : musicdata.genre,
            rate : musicdata.rate
        } 

        MusicDataService.create(data)
            .then(res => {
                setMusicData({
                    id : res.data.id,
                    title : res.data.tite,
                    genre : res.data.genre,
                    rate : res.data.rate
                })
                setSubmitted(true);
                console.log(res.data)
            }
            )
            .catch(e => {
                console.log(e)
            })
    }

    
    return (
        <div>
            <div>제목 : <TextField name = "title" value={musicdata.title} onChange={handleInputChange} /></div>
            <div>장르 : <TextField name = "genre" value={musicdata.genre} onChange={handleInputChange} /></div>
            <div>평점 : <TextField name = "rate" value={musicdata.rate} onChange={handleInputChange}   /></div>
            <Button onClick = {onSave}>저장</Button>
        </div>
    )
}
export default AddMusic;*/