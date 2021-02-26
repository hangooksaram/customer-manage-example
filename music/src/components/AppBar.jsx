import { Paper } from "@material-ui/core";
import React from "react";
import appBarStyle from "../styles/appBarStyle";
import ReactPlayer from "react-player";
import { Typography } from "@material-ui/core";
import logo from "./logo.jpg";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import { TextField } from "@material-ui/core";
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
        <Grid container justify="flex-start" item xs={5}>
          {title ? (
            <>
              <Grid
                alignItems="center"
                style={{ overflow: "hidden" }}
                item
                container
                xs={8}
              >
                <Typography color="textSecondary" className={appbar.playing}>
                  now playing ~ {title} ~
                </Typography>
              </Grid>
              {!pause ? (
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  item
                  xs={4}
                >
                  <IconButton>
                    <PlayArrowIcon
                      color="textSecondary"
                      fontSize="large"
                      onClick={() => setPause(true)}
                    />
                  </IconButton>
                </Grid>
              ) : (
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  item
                  xs={4}
                >
                  <IconButton>
                    <PauseIcon
                      color="textSecondary"
                      fontSize="large"
                      onClick={() => setPause(false)}
                    />
                  </IconButton>
                </Grid>
              )}
            </>
          ) : (
            ""
          )}
        </Grid>
        <Grid container alignItems="center" justify="flex-end" item xs={4}>
          <SearchIcon fontSize="large" />
          <TextField
            values={search}
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>
      </Grid>
      <ReactPlayer
        style={{ display: "none" }}
        width=""
        playing={pause}
        url={link}
      />
    </Paper>
  );
};

export default AppBar;
