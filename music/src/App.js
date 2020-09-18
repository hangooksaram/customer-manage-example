import React, { useState, useEffect } from 'react';
import Music from './components/Music'
import Button from '@material-ui/core/Button'
import { MdAdd, MdClear } from "react-icons/md";
import FirstPage from './components/FirstPage'
import Modal from 'react-modal';
import TextField from '@material-ui/core/TextField'
//import AddMusic from './components/AddMusic'
import MusicDataService from './services/MusicService';
import { Table, TableHead, TableCell, TableContainer } from '@material-ui/core';

const App = () => {
  useEffect(() => {
    retrieveMusics();
  }, [])

  const [musics, setMusics] = useState([]);
  const [isOpened, setIsOpened] = useState(false);

  const retrieveMusics = () => {
    MusicDataService.getAll()
      .then(res => {
        setMusics(res.data);
      })
      .catch(e => {
        console.log(e)
      })
  }
  const openModal = () => {
    setIsOpened(true);
  }

  const closeModal = () => {
    setIsOpened(false);
  }

  const [musicdata, setMusicData] = useState({
    id: null,
    title: '',
    genre: '',
    rate: ''
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setMusicData({ ...musicdata, [name]: value })
  }

  const onSave = () => {
    let data = {
      title: musicdata.title,
      genre: musicdata.genre,
      rate: musicdata.rate
    }

    MusicDataService.create(data)
      .then(res => {
        setMusicData({
          id: res.data.id,
          title: res.data.tite,
          genre: res.data.genre,
          rate: res.data.rate
        })
        console.log(res.data)
      }
      )
      .catch(e => {
        console.log(e)
      })
      setTimeout(()=> {
        setIsOpened(false);
      }, 1000)
  }


  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: 370,
      height: 200
    }
  };

  return (
    <div>
      {
        musics.length > 0 ?
          <div>
            <TableContainer>
              <Table style = {{width : '100%'}}>
                <TableHead style={{ backgroundColor: '#FFCA3D' }}>
                  <TableCell style={styles.tableAttribute}>제목</TableCell>
                  <TableCell style={styles.tableAttribute}>장르</TableCell>
                  <TableCell style={styles.tableAttribute}>별점</TableCell>
                </TableHead>
              </Table>
            </TableContainer>
            <Table>
            {musics.map(m => {
              return <Music title={m.title} genre={m.genre} rate={m.rate} />
            })} {/* table style이 제대로 적용되지 않음*/}
            </Table>
          </div>
          : <FirstPage />
      }
      <div style={styles.icon}><Button onClick={openModal}><MdAdd size="125"></MdAdd></Button></div>
      <Modal ariaHideApp={false} style={modalStyles} onRequestClose={closeModal} isOpen={isOpened}>
        <div style={{ display: 'flex' }}>
          <div style={{ marginLeft: 'auto' }} onClick={closeModal}><MdClear /></div></div>
        <div style={{ textAlign: 'center' }}>
          <div>제목 : <TextField name="title" value={musicdata.title} onChange={handleInputChange} /></div>
          <div>장르 : <TextField name="genre" value={musicdata.genre} onChange={handleInputChange} /></div>
          <div>평점 : <TextField name="rate" value={musicdata.rate} onChange={handleInputChange} /></div>
          <Button onClick={onSave}>저장</Button></div>
      </Modal>
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
  },
  tableAttribute: {
    fontSize: 40,
    textAlign: 'center',
    paddingRight: 27,
    color: 'white'
  }
}

export default App;
