import React, { useEffect } from "react";
import gridStyle from "../styles/gridStyle";
import { Paper, Fade } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import UpdateMusicForm from "../components/UpdateMusicForm";
import updateStyle from "../styles/updateStyle";

const MusicUpdate = ({ setRefresh, setUpdate, music }) => {
  const update = updateStyle();
  const grid = gridStyle();
  const handleClick = () => {
    setUpdate(null);
  };
  return (
    <Fade in={true}>
      <Paper variant="outlined" square className={grid.detail}>
        <ArrowBackIosIcon onClick={handleClick} />
        <UpdateMusicForm setRefresh={setRefresh} music={music} />
      </Paper>
    </Fade>
  );
};

export default MusicUpdate;
