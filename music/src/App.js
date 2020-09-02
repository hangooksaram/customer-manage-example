import React from 'react';
import Music from './components/Music'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button'
import { MdAdd } from "react-icons/md";
import FirstPage from './components/FirstPage'


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
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>제목</TableCell>
                <TableCell>장르</TableCell>
                <TableCell>별점</TableCell>
              </TableRow>
            </TableHead>
                  {musics.map(m => {
                    return <Music title={m.title} genre={m.genre} rate={m.rate} />
                  })}
          </Table>
          : <FirstPage />}

      <div style={styles.icon}><Button><MdAdd size="125"></MdAdd></Button></div>
    </div>
  );
}

const styles = {
  first: {
    textAlign: 'center',
    marginTop: '10%',
    fontSize: 45,
    fontWeight: 'bold'
  },
  icon: {
    textAlign: 'center',
    marginTop: '5%'
  }
}

export default App;
