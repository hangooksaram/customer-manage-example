import React, { useState, useEffect, } from "react";
import { Button, Typography } from "@material-ui/core";
import { MdAdd } from "react-icons/md";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import SearchIcon from "@material-ui/icons/Search";
import AddMusicForm from "./../components/AddMusicForm";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
  Popover,
  Grid,
} from "@material-ui/core";
import ReactPlayer from "react-player";
import { getAll, remove, getOne } from "../services/MusicService";
import gridStyle from "../styles/gridStyle";
import popOverStyle from "../styles/popOverStyle";
import MusicPlayer from "./../components/MusicPlayer";
import Rating from '@material-ui/lab/Rating';
import StarIcon from '@material-ui/icons/Star';
import MusicList from './../components/MusicList';

const MainPageT = () => {
  const [musics, setMusics] = useState([]);
  const [link, setLink] = useState("");
  const [refresh, setRefresh] = useState(0);
  const grid = gridStyle();
  const popover = popOverStyle();
  useEffect(() => {
    getAll().then((music) => setMusics(music));
  }, [refresh]);
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  const handleClickDeleteIcon = async (id) => {
    remove(id).then(() => {
      setRefresh((rf) => rf + 1);
    });
  };

  const handleClickDetailIcon = (id) => {
    
    getOne(id).then(res=>console.log(res));
  }
  const handleClickLink = (link) => {
    setLink(link);
  };

  const rateColor = [
    {
      rate : 1,
      color : '#F7F3FF'
    },
    {
      rate : 2,
      color : '#F2EBFF'
    },
    {
      rate : 3,
      color : '#EEE4FF'
    },
    {
      rate : 4,
      color : '#E8DAFF'
    },
    {
      rate : 5,
      color : '#E1CEFF'
    }
  ]
  return (
    <React.Fragment>
      <MusicList/>
      <AddMusicForm
        refresh={refresh}
        setRefresh={setRefresh}
        open={open}
        closeModal={closeModal}
      />
    </React.Fragment>
  );
};

export default MainPageT;
