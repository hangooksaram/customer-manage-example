import React, { useState, useEffect } from "react";
import { Button, Grow, Typography } from "@material-ui/core";
import { MdAdd } from "react-icons/md";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import SearchIcon from "@material-ui/icons/Search";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AddMusicForm from "./../components/AddMusicForm";
import { Paper, Grid } from "@material-ui/core";
import { getAll, remove, getOne } from "../api/MusicService";
import musicsStyle from "../styles/musicsStyle";
import AppBar from "./AppBar";
import Rating from "@material-ui/lab/Rating";
import PauseIcon from "@material-ui/icons/Pause";
import MusicDetail from "./../pages/musicdetail";
import UpdateIcon from "@material-ui/icons/Update";
import MusicUpdate from "./../pages/musicupdate";
import IconButton from "@material-ui/core/IconButton";
import { Favorite, FavoriteBorder } from "@material-ui/icons";

const MusicList = () => {
  const musicList = musicsStyle();
  const [musics, setMusics] = useState([]);
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState(null);
  const [detail, setDetail] = useState(0);
  const [update, setUpdate] = useState(0);
  const [pause, setPause] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getAll().then((music) => setMusics(music));
  }, [refresh]);

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

  const handleClickUpdateIcon = (id) => {
    setUpdate(id);
  };

  const handleClickDetailIcon = (id) => {
    getOne(id).then((res) => console.log(res));
    setDetail(id);
  };
  const handleClickLink = (music) => {
    const { title, link } = music;
    setLink({ title: title, link: link });
  };

  return (
    <React.Fragment>
      <AppBar
        title={link?.title}
        pause={pause}
        setPause={setPause}
        link={link?.link}
        search={search}
        setSearch={setSearch}
      />
      <Grid className={musicList.root} container spacing={4}>
        {musics
          .filter((m) => {
            return search.toLowerCase()
              ? m.title.toLowerCase().includes(search)
              : musics;
          })
          .map((music) => {
            return (
              <Grow in={true}>
                <Grid className={musicList.container} item xs={2} sm={4}>
                  {detail === music.id ? (
                    <MusicDetail setDetail={setDetail} id={music.id} />
                  ) : update === music.id ? (
                    <MusicUpdate
                      setRefresh={setRefresh}
                      setUpdate={setUpdate}
                      music={music}
                    />
                  ) : (
                    <Paper
                      variant="outlined"
                      square
                      className={
                        link?.link === music.link
                          ? musicList.playing
                          : musicList.paper
                      }
                    >
                      <Grid container spacing={2}>
                        <Grid item className={musicList.content} xs={12}>
                          <Typography
                            className={musicList.link}
                            aria-owns={open ? "mouse-over-popover" : undefined}
                            aria-haspopup="true"
                            variant="h4"
                            nowrap
                            onClick={() => handleClickLink(music)}
                          >
                            {music.title}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Rating
                            name="read-only"
                            precision={0.5}
                            icon={<Favorite color="secondary" />}
                            emptyIcon={<FavoriteBorder color="secondary" />}
                            value={music.rate}
                            readOnly
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <IconButton
                            onClick={() => handleClickDeleteIcon(music.id)}
                            className={musicList.deleteIcon}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Grid>
                        <Grid item xs={4}>
                          <IconButton
                            onClick={() => handleClickUpdateIcon(music.id)}
                            className={musicList.updateIcon}
                          >
                            <UpdateIcon />
                          </IconButton>
                        </Grid>
                        <Grid item xs={4}>
                          <IconButton
                            onClick={() => handleClickDetailIcon(music.id)}
                            className={musicList.detailIcon}
                          >
                            <SearchIcon></SearchIcon>
                          </IconButton>
                        </Grid>
                        <Grid item xs={12}>
                          {link?.link === music.link ? (
                            <IconButton>
                              {!pause ? (
                                <PlayArrowIcon
                                  fontSize="50px"
                                  onClick={() => setPause(true)}
                                />
                              ) : (
                                <PauseIcon onClick={() => setPause(false)} />
                              )}
                            </IconButton>
                          ) : (
                            ""
                          )}
                        </Grid>
                      </Grid>
                    </Paper>
                  )}
                </Grid>
              </Grow>
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
