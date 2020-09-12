import React, { useState, useEffect }  from 'react';
import Music from './components/Music'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button'
import { MdAdd, MdClear } from "react-icons/md";
import FirstPage from './components/FirstPage'
import Modal from 'react-modal';
import AddMusic from './components/AddMusic'

const App = () => {
  const [musics, setMusics] = useState([]);
  /*const [completed, setCompleted] = useState(0);
  const [isOpened, setIsOpened] = useState(false);

  const openModal = () => {
    setIsOpened(true);
  }

  const closeModal = () => {
    setIsOpened(false);
  }*/

  const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width : 370,
        height : 370
    }
};

  useEffect(() => {
    callApi()
      .then(res => setMusics(res)) //2.hooks를 호출해서 에러!
      .catch(err => console.log("this is error " + err));
  }, [])



  const callApi = async() => { //1. function 에서(기본적인 javascript 문법) 에서 
    const response = await fetch('http://localhost:5000/musicdata')
    const body = await response.json();
    return body;
  }

  return (
    <div>
      {
        musics.length > 0 ?
          <div>
              {musics.map(m => {
                return <Music title={m.title} genre={m.genre} rate={m.rate} />
              })}
          </div>
          : <FirstPage />}

      {/*<div style={styles.icon}><Button onClick={openModal}><MdAdd size="125"></MdAdd></Button></div>
      <Modal style = {modalStyles} onRequestClose={closeModal} isOpen={isOpened}>
        <div style={{ display: 'flex' }}><div style={{ marginLeft: 'auto' }} onClick={closeModal}><MdClear /></div></div>
        <div><AddMusic/></div>
            </Modal>*/}
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
