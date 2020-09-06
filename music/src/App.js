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
    callApi()
      .then(res => setMusics(res))
      .catch(err => console.log("this is error " + err));
  }, [])

  async function callApi() {
    const response = await fetch('http://localhost:5000/musicdata')
    const body = await response.json();
    return body;
  }

  console.log(callApi());
  const progress = () => {
    setCompleted(completed >= 100 ? 0 : completed + 1)
  }

  return (
    <div>
      {
        musics.length > 0 ?
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>제목</TableCell>
                <TableCell>장르</TableCell>
                <TableCell>별점</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {musics.map(m => {
                return <Music title={m.title} genre={m.genre} rate={m.rate} />
              })}
            </TableBody>
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
