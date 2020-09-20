import React, { useState, useEffect } from 'react';
import { MdAdd, MdClear } from "react-icons/md";
import FirstPage from './components/FirstPage'
import Modal from 'react-modal';
import TextField from '@material-ui/core/TextField'
import MusicDataService from './services/MusicService';
import { Table, TableHead, TableCell, TableContainer, TableRow, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteForever';
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    retrieveMusics();
  }, [refresh])

  const [isOpened, setIsOpened] = useState(false);
  const [editOpened, setEditOpened] = useState(false);

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

  const openEditModal = id => {
    setEditOpened(id)
  }

  const closeEditModal = () => {
    setEditOpened(false);
  }

  const [musicdata, setMusicData] = useState({
    id: null,
    title: '',
    genre: '',
    rate: '',
    comment: ''
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setMusicData({ ...musicdata, [name]: value })
  }

  const refreshInput = () => {
    setMusicData({
      id: null,
      title: '',
      genre: '',
      rate: '',
      comment: ''
    })
  }

  const addMusic = () => {
    let data = {
      title: musicdata.title,
      genre: musicdata.genre,
      rate: musicdata.rate,
      comment: musicdata.comment
    }

    MusicDataService.create(data)
      .then(res => {
        setMusicData({
          id: res.data.id,
          title: res.data.tite,
          genre: res.data.genre,
          rate: res.data.rate,
          comment: res.data.comment
        })
        setRefresh(refresh => refresh + 1);
        refreshInput();
      }
      )
      .catch(e => {
        console.log(e)
      })
    setTimeout(() => {
      setIsOpened(false);
    }, 100)
  }

  const deleteMusic = (id) => {
    MusicDataService.remove(id)
      .then(res => {
        setRefresh(refresh => refresh - 1);
      })
      .catch(e => {
        console.log(e);
      })
  }

  const updateMusic = (id, cmt) => {
    var data = {
      comment: cmt
    };
    MusicDataService.update(id, data)
      .then(response => {
        setRefresh(refresh => refresh + 1);
        setEditOpened(false);
        refreshInput();
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {
        musics.length > 0 ?
          <TableContainer>
            <Table>
              <TableRow style={{ backgroundColor: '#FFCA3D' }}>
                <TableCell style={styles.tableAttribute}>제목</TableCell>
                <TableCell style={styles.tableAttribute}>장르</TableCell>
                <TableCell style={styles.tableAttribute}>별점</TableCell>
                <TableCell style={styles.tableAttributeComment}>코멘트</TableCell>
              </TableRow>
            </Table>
            {musics.map(m => {
              return (
                <Table>
                  <TableRow>
                    <TableCell style={styles.tableCell}>{m.title}</TableCell>
                    <TableCell style={styles.tableCell}>{m.genre}</TableCell>
                    <TableCell style={styles.tableCell}>{m.rate}</TableCell>
                    <TableCell style={styles.tableCellComment}>{m.comment} <Button onClick={() => openEditModal(m.id)}>재평가</Button>
                      {editOpened === m.id ?
                        <div>
                          <TextField name="comment" value={musicdata.comment} onChange={handleInputChange} />
                          <Button onClick={() => updateMusic(m.id, musicdata.comment)}>저장</Button></div> : null
                      }
                    </TableCell>
                    <TableCell align='right'><div onClick={() => { deleteMusic(m.id) }}><DeleteIcon fontSize='large' /></div></TableCell>
                  </TableRow>
                </Table>
              )
            })}
          </TableContainer>
          : <FirstPage />
      }
      <div style={styles.icon}><Button onClick={openModal}><MdAdd size="125"></MdAdd></Button></div>
      <Modal ariaHideApp={false} style={styles.modalStyles} onRequestClose={closeModal} isOpen={isOpened}>
        <div style={{ display: 'flex' }}>
          <div style={{ marginLeft: 'auto' }} onClick={closeModal}><MdClear /></div></div>
        <div style={{ textAlign: 'center' }}>
          <div>제목 : <TextField name="title" value={musicdata.title} onChange={handleInputChange} /></div>
          <div>장르 : <TextField name="genre" value={musicdata.genre} onChange={handleInputChange} /></div>
          <div>평점 : <TextField name="rate" value={musicdata.rate} onChange={handleInputChange} /></div>
          <div>코멘트 : <TextField name="comment" value={musicdata.comment} onChange={handleInputChange} /> </div>
          <Button onClick={addMusic}>저장</Button></div>
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
  modalStyles: {
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
  },

  tableAttribute: {
    width: '15%',
    fontSize: 40,
    textAlign: 'center',
    color: 'white'
  },

  tableAttributeComment: {
    width: '55%',
    fontSize: 40,
    textAlign: 'center',
    color: 'white'
  },

  tableCell: {
    width: '15%',
    textAlign: 'center',
    fontSize: 25
  },
  tableCellComment: {
    width: '55%',

    textAlign: 'center',
    fontSize: 25
  }
}

export default App;
