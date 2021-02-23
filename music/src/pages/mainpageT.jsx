import React, { useState, useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import { MdAdd } from "react-icons/md";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import AddMusicForm from "./../components/AddMusicForm";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
  Popover,
} from "@material-ui/core";

import { getAll, remove } from "../services/MusicService";
import tableStyle from "../styles/tableStyle";
import TodayMusic from "./../components/TodayMusic";
import popOverStyle from "../styles/popOverStyle";

const MainPageT = () => {
  const [musics, setMusics] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const table = tableStyle();
  const popover = popOverStyle();
  useEffect(() => {
    getAll().then((music) => setMusics(music));
  }, [refresh]);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickTitle =(link)=>{
    
  }
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const popOverOpen = Boolean(anchorEl);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  const handleClickIcon = async (id) => {
    remove(id).then(() => {
      setRefresh((rf) => rf + 1);
    });
  };
  return (
    <React.Fragment>
      <TodayMusic />
      <Paper elevation={3} className={table.root}>
        <Table>
          <TableHead className={table.head}>
            <TableRow>
              <TableCell>제목</TableCell>
              <TableCell>언제?</TableCell>
              <TableCell>평점</TableCell>
              <TableCell>한줄평</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {musics.map((music) => {
              return (
                <TableRow className={table.body} key={`key_${music.id}`}>
                  <TableCell>
                    <Typography
                      aria-owns={open ? "mouse-over-popover" : undefined}
                      aria-haspopup="true"
                      onMouseEnter={handlePopoverOpen}
                      onMouseLeave={handlePopoverClose}
                      onClick={() => handleClickTitle(music.link)}
                    >
                      {music.title}
                    </Typography>
                  </TableCell>
                  <Popover
                    id="mouse-over-popover"
                    className={popover.popover}
                    open={popOverOpen}
                    classes={{
                      paper: popover.paper,
                    }}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                  >
                    <Typography>링크 타려면 클릭!</Typography>
                  </Popover>
                  <TableCell>{music.timing}</TableCell>
                  <TableCell>{music.rate}</TableCell>
                  <TableCell>{music.comment}</TableCell>
                  <TableCell>
                    <DeleteIcon
                      onClick={() => handleClickIcon(music.id)}
                      className={table.icon}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
      <Button onClick={openModal}>
        <MdAdd size="125"></MdAdd>
      </Button>
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
