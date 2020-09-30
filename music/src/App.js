import React, { useState, useEffect, useRef, useMemo } from "react";
import { MdAdd, MdClear } from "react-icons/md";
import FirstPage from "./components/FirstPage";
import Modal from "react-modal";
import TextField from "@material-ui/core/TextField";
import MusicDataService from "./services/MusicService";
import {
  Table,
  TableHead,
  TableCell,
  TableContainer,
  TableRow,
  Button,
  TableBody,
  TableFooter,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/DeleteForever";

/*
function usePrevious(updaterefresh, musics) {  //custom hook을 만들때는 use를 붙여야하는가..
  const ref = useRef();
  const [predata, setPreData] = useState({id : '', pre : ''})
  useEffect(() => {
    ref.current = musics
    ref.current.map(m=> 
      setPreData({
        id : m.id,
        pre : m.comment
      })
      )
  }, [updaterefresh]) //렌더링이 될때마다 실행이된다. 의존값인 data는 무쓸모인가
  return predata; //현재의 값이 저장이 됨..
  //하지만 해당 선택된것이  row인지 식별 불가
}*/

/*function usePrevious(value) {
  const ref = useRef();
  useMemo(() => {
    ref.current= value
    return ref.current
  }, [ref.current])
}*/

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const [updaterefresh, setUpdateRefresh] = useState(0);
  const [musics, setMusics] = useState([]);
  const [ispoint, setIsPoint] = useState(false);
  const [checkid, setCheckId] = useState(0);
  const [previous, setPrevious] = useState([
    {
      id: null,
      title: "",
      timing: "",
      rate: 0,
      comment: "",
    },
  ]);
  const ispointed = (id) => {
    setIsPoint(true);
    setCheckId(id);
  };

  const isnotpointed = (id) => {
    setIsPoint(false);
    setCheckId(id);
  };
  useEffect(() => {
    retrieveMusics();
  }, [refresh === 1]);

  /*const previousmusic = usePrevious(updaterefresh, musics);
  console.log(previousmusic)*/

  const [isOpened, setIsOpened] = useState(false);
  const [editOpened, setEditOpened] = useState(false);

  const retrieveMusics = () => {
    MusicDataService.getAll()
      .then((res) => {
        setMusics(res.data);
        console.log("what?"); // 이부분이 재렌더링되는 것은 아님
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //id가 같으면, 수정하고
  //id가 다르면, 더해준다
  const getOne = (id) => {
    MusicDataService.getOne(id)
      .then((res) => {
        const predata = {
          id: res.data.id,
          title: res.data.title,
          timing: res.data.timing,
          rate: res.data.rate,
          comment: res.data.comment,
        };
        {
          previous.map((m) => {
            m.id == id
              ? setPrevious({ ...previous, comment: predata.comment })
              : setPrevious(previous.concat(predata));
          });
        }

        console.log(previous);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const openModal = () => {
    setIsOpened(true);
  };

  const closeModal = () => {
    setIsOpened(false);
  };

  const openEditor = (id) => {
    setEditOpened(id);
  };

  const closeEditor = () => {
    setEditOpened(false);
  };

  const [musicdata, setMusicData] = useState({
    id: null,
    title: "",
    timing: "",
    rate: "",
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMusicData({ ...musicdata, [name]: value });
  };

  const refreshInput = () => {
    setMusicData({
      id: null,
      title: "",
      timing: "",
      rate: "",
      comment: "",
    });
  };

  const addMusic = () => {
    let data = {
      title: musicdata.title,
      timing: musicdata.timing,
      rate: musicdata.rate,
      comment: musicdata.comment,
    };

    MusicDataService.create(data)
      .then((res) => {
        setMusicData({
          id: res.data.id,
          title: res.data.tite,
          timing: res.data.timing,
          rate: res.data.rate,
          comment: res.data.comment,
        });
        setRefresh((refresh) => refresh + 1);
        setRefresh(0);
        refreshInput();
      })
      .catch((e) => {
        console.log(e);
      });
    setTimeout(() => {
      setIsOpened(false);
    }, 100);
  };

  const deleteMusic = (id) => {
    MusicDataService.remove(id)
      .then((res) => {
        setRefresh((refresh) => refresh + 1);

        setRefresh(0);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateMusic = (id, cmt) => {
    let data = {
      comment: cmt,
    };
    getOne(id);
    MusicDataService.update(id, data)
      .then(() => {
        setRefresh((refresh) => refresh + 1);
        setRefresh(0);
        setEditOpened(false);
        refreshInput();
        setUpdateRefresh(updaterefresh + 2);

        setUpdateRefresh(0);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {musics ? (
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#FF5733" }}>
              <TableCell style={styles.tableAttribute}>ID</TableCell>
              <TableCell style={styles.tableAttribute}>제목</TableCell>
              <TableCell style={styles.tableAttribute}>언제?</TableCell>
              <TableCell style={styles.tableAttribute}>별점</TableCell>
              <TableCell style={styles.tableAttributeComment}>코멘트</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {musics.map((m) => (
              <TableRow key={m.id}>
                <TableCell style={styles.tableCell}>{m.id}</TableCell>
                <TableCell style={styles.tableCell}>
                  <div
                    onPointerEnter={() => ispointed(m.id)}
                    onPointerLeave={() => isnotpointed(m.id)}
                    style={
                      ispoint && m.id == checkid
                        ? { fontSize: 30 }
                        : { fontSize: 25 }
                    }
                  >
                    {m.title}
                  </div>
                </TableCell>
                <TableCell style={styles.tableCell}>{m.timing}</TableCell>
                <TableCell style={styles.tableCell}>{m.rate}</TableCell>
                <TableCell style={styles.tableCell}>
                  {m.comment}
                  이전평가 : {previous.comment}
                  <Button color="primary" onClick={() => openEditor(m.id)}>
                    재평가
                  </Button>
                  {editOpened === m.id ? (
                    <div>
                      <TextField
                        name="comment"
                        value={musicdata.comment}
                        onChange={handleInputChange}
                      />
                      <Button
                        onClick={() => updateMusic(m.id, musicdata.comment)}
                      >
                        저장
                      </Button>
                    </div>
                  ) : null}
                </TableCell>

                <TableCell align="right">
                  <div
                    onClick={() => {
                      deleteMusic(m.id);
                    }}
                  >
                    <DeleteIcon fontSize="large" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <FirstPage />
      )}

      <div style={styles.icon}>
        <Button onClick={openModal}>
          <MdAdd size="125"></MdAdd>
        </Button>
      </div>
      <Modal
        ariaHideApp={false}
        style={styles.modalStyles}
        onRequestClose={closeModal}
        isOpen={isOpened}
      >
        <div style={{ display: "flex" }}>
          <div style={{ marginLeft: "auto" }} onClick={closeModal}>
            <MdClear />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div>
            제목 :
            <TextField
              name="title"
              value={musicdata.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            언제? :
            <TextField
              name="timing"
              value={musicdata.timing}
              onChange={handleInputChange}
            />
          </div>
          <div>
            평점 :
            <TextField
              name="rate"
              value={musicdata.rate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            코멘트 :
            <TextField
              name="comment"
              value={musicdata.comment}
              onChange={handleInputChange}
            />
          </div>
          <Button onClick={addMusic}>저장</Button>
        </div>
      </Modal>
    </div>
  );
};

const styles = {
  first: {
    textAlign: "center",
    marginTop: "10%",
    fontSize: 45,
    fontWeight: "bold",
  },
  icon: {
    textAlign: "center",
    marginTop: "5%",
  },
  modalStyles: {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: 370,
      height: 200,
    },
  },

  tableAttribute: {
    width: "15%",
    fontSize: 40,
    textAlign: "center",
    color: "white",
  },

  tableAttributeComment: {
    width: "55%",
    fontSize: 40,
    textAlign: "center",
    color: "white",
  },

  tableCell: {
    width: "15%",
    textAlign: "center",
    fontSize: 25,
  },
  tableCellComment: {
    width: "55%",

    textAlign: "center",
    fontSize: 25,
  },
};

export default App;
