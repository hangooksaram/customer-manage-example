import React, {useState, useEffect} from 'react';
import { getAll, getOne } from '../services/MusicService';

const TodayMusic =()=>{        
    const [today, setToday] = useState({});
    useEffect(()=> {
        getAll().then(data => {
            let first = data[0].id;
            let randomMusic = Math.floor( Math.random() * data.length + first);
            getOne(randomMusic).then((data)=> {    
                console.log(data);
                setToday(data);                
                console.log(today);
            });
        });
    },[])    
    return(
        <div>
            오늘의 추천곡 {today.title}
        </div>
    )
}

export default TodayMusic;