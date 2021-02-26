import React from "react";
import updatePageStyle from "../styles/updatePageStyle";
import { Paper, Fade, Grid, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import UpdateMusicForm from "../components/UpdateMusicForm";

const MusicUpdate = ({ setRefresh, setUpdate, music }) => {
  const update = updatePageStyle();
  const handleClick = () => {
    setUpdate(null);
  };
  return (
    <Fade in={true}>
      <Paper variant="outlined" square className={update.root}>
        <Grid container>
          <Grid container justify="center" item xs={10}>
            <UpdateMusicForm setRefresh={setRefresh} music={music} />
          </Grid>
          <Grid item xs={2}>
            <IconButton>
              <ArrowBackIosIcon onClick={handleClick} />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Fade>
  );
};

export default MusicUpdate;
