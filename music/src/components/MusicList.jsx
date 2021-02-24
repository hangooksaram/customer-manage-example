import React, { useState, useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import { MdAdd } from "react-icons/md";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import SearchIcon from "@material-ui/icons/Search";
import AddMusicForm from "./../components/AddMusicForm";
import { Paper, Grid, makeStyles } from "@material-ui/core";
import { getAll, remove, getOne } from "../services/MusicService";
import gridStyle from "../styles/gridStyle";
import MusicPlayer from "./../components/MusicPlayer";
import Rating from "@material-ui/lab/Rating";
import StarIcon from "@material-ui/icons/Star";


const useStyles = makeStyles((props)=>({

}))

const MusicList = () => {
  const [musics, setMusics] = useState([]);
  const [link, setLink] = useState("");
  const [refresh, setRefresh] = useState(0);
  const grid = gridStyle();
  useEffect(() => {
    getAll().then((music) => setMusics(music));
  }, [refresh]);
  const handleClickDeleteIcon = async (id) => {
    remove(id).then(() => {
      setRefresh((rf) => rf + 1);
    });
  };
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  const handleClickDetailIcon = (id) => {
    getOne(id).then((res) => console.log(res));
  };
  const handleClickLink = (link) => {
    setLink(link);
  };

  const rateColor = [
    {
      rate: 1,
      color: "#F7F3FF",
    },
    {
      rate: 2,
      color: "#F2EBFF",
    },
    {
      rate: 3,
      color: "#EEE4FF",
    },
    {
      rate: 4,
      color: "#E8DAFF",
    },
    {
      rate: 5,
      color: "#E1CEFF",
    },
  ];
  return (
    <React.Fragment>
      <MusicPlayer link={link} />
      <Grid className={grid.root} container spacing={4}>
        {musics.map((music) => {
          return (
            <Grid className={grid.container} item xs={2} sm={4}>
              <Paper
                style={{
                  boxShadow: `5px 5px 5px ${rateColor[music.rate - 1].color}`,
                }}
                variant="outlined"
                square
                className={link === music.link ? grid.playing: grid.paper}
              >
                <Grid container spacing={2}>
                  <Grid item className={grid.content} xs={12}>
                    <Typography
                      className={grid.link}
                      aria-owns={open ? "mouse-over-popover" : undefined}
                      aria-haspopup="true"
                      variant="h4"
                      nowrap
                      onClick={() => handleClickLink(music.link)}
                    >
                      {music.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Rating
                      name="read-only"
                      icon={<StarIcon fontSize="inherit" />}
                      value={music.rate}
                      readOnly
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <DeleteIcon
                      onClick={() => handleClickDeleteIcon(music.id)}
                      className={grid.icon}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <SearchIcon
                      onClick={() => handleClickDetailIcon(music.id)}
                    ></SearchIcon>
                  </Grid>
                  <Grid item xs={12}>
                      {link === music.link ? <Typography>playing</Typography> : ""}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          );
        })}
        <Grid item xs={2}>
          <Button onClick={openModal}>
            <MdAdd size="125"></MdAdd>
          </Button>
        </Grid>
      </Grid>
      <AddMusicForm
        refresh={refresh}
        setRefresh={setRefresh}
        open={open}
        closeModal={closeModal}
      />
    </React.Fragment>
  );
};

export default MusicList;
