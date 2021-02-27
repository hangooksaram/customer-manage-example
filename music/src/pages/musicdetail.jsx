import React, { useState, useEffect } from "react";
import { getOne } from "../api/MusicService";
import {
  Fade,
  Paper,
  IconButton,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
import musicsStyle from "../styles/musicsStyle";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const MusicDetail = ({ setDetail, id }) => {
  const musics = musicsStyle();
  const [music, setMusic] = useState(null);
  const handleClick = () => {
    setDetail(null);
  };
  useEffect(() => {
    getOne(id).then((music) => setMusic(music));
  }, []);
  return (
    <Fade in={true}>
      <Paper variant="outlined" square className={musics.detail}>
        <Grid
          style={{ width: "90%" }}
          justify="center"
          alignItems="center"
          container
        >
          <Grid item xs={10}>
            <Typography>{music?.timing} 들어요</Typography>
            <Typography>제 평가는 ... {music?.comment}</Typography>
          </Grid>
          <Grid item xs={2}>
            <IconButton onClick={handleClick}>
              <ArrowBackIosIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Fade>
  );
};

export default MusicDetail;
