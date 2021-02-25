import React,{useState, useEffect} from 'react';
import { getOne } from '../services/MusicService';
import { Fade, Paper } from '@material-ui/core';
import gridStyle from '../styles/gridStyle';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Grow from '@material-ui/core/Zoom';
const MusicDetail = ({setDetail, id})=> {
    const grid =gridStyle();
    const [music, setMusic] = useState(null);
    const handleClick=()=>{
        setDetail(null);
    }
    useEffect(()=>{
        getOne(id).then(music => setMusic(music));        
    },[])
    return(
        <Fade in={true}>
        <Paper                
                variant="outlined"
                square
                className={grid.detail}
              >
                  <ArrowBackIosIcon onClick={handleClick}/>
             {music?.timing} {music?.comment}
        </Paper>
        </Fade>
    )    
}

export default MusicDetail;