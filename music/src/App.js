import React from 'react';
import Music from './components/Music'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useState, useEffect } from 'react'

function App() {
  const [musics, setMusics] = useState([]);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    //const timer = setInterval(progress, 20);
    callApi()
      .then(res => setMusics(res))
      .catch(err => console.log("this is error " + err));

    //return () => clearInterval(timer);
  }, [musics])

  async function callApi() {
    const response = await fetch('/api/music')
    const body = await response.json();

    return body;
  }

  const progress = () => {
    setCompleted(completed >= 100 ? 0 : completed + 1)
  }

  return (
    <div>
      {
        musics.length > 1 ?
          <div>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>번호</TableCell>
                  <TableCell>제목</TableCell>
                  <TableCell>장르</TableCell>
                  <TableCell>별점</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {musics.map(m => {
                  return <Music id={m.id} title={m.title} genre={m.genre} rate={m.rate} />
                })}
              </TableBody>
            </Table>
          </div>
          : <div style={styles.first}>새로운 음악을 추가해 보세요</div>}
    </div>
  );
}

const styles = {
  first : {
    textAlign: 'center', 
    marginTop : '5%',
    fontSize : 45,
    fontWeight : 'bold'
  }
}

export default App;
 