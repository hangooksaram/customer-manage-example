import { Paper } from "@material-ui/core";
import React from "react";
import appBarStyle from "../styles/appBarStyle";
import ReactPlayer from "react-player";
import { Typography } from "@material-ui/core";
import logo from "./logo.jpg";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import { TextField, Box } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const AppBar = ({ title, pause, setPause, link, search, setSearch }) => {
  const appbar = appBarStyle();
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <Paper className={appbar.root}>
      <Grid alignItems="center" container>
        <Grid item xs={3}>
          <img style={{ width: "60%", height: "90%" }} src={logo} />
        </Grid>
        <Grid container alignItems="center" justify="flex-start" item xs={5}>
          <Grid
            style={{ overflow: "hidden", height: "100%" }}
            className={appbar.playingContainer}
            item
            container
            xs={8}
          >
            {title ? (
              <Typography color="textSecondary" className={appbar.playing}>
                now playing {title}
              </Typography>
            ) : (
              <Typography className={appbar.notPlaying}>
                아직 선택한 곡이 없네요
              </Typography>
            )}
          </Grid>
          {!pause ? (
            <Grid container justify="center" alignItems="center" item xs={4}>
              <IconButton onClick={() => setPause(true)}>
                <PlayArrowIcon color="textSecondary" fontSize="large" />
              </IconButton>
            </Grid>
          ) : (
            <Grid container justify="center" alignItems="center" item xs={4}>
              <IconButton onClick={() => setPause(false)}>
                <PauseIcon color="textSecondary" fontSize="large" />
              </IconButton>
            </Grid>
          )}
        </Grid>
        <Grid container alignItems="center" justify="center" item xs={4}>
          <SearchIcon fontSize="large" />
          <TextField
            style={{ width: "80%" }}
            values={search}
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>
      </Grid>
      <ReactPlayer style={{ display: "none" }} playing={pause} url={link} />
    </Paper>
  );
};

export default AppBar;
