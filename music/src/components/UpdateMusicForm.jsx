import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, IconButton,Snackbar, Slide } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import StarIcon from "@material-ui/icons/Star";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { update } from "../api/MusicService";
import updatePageStyle from "../styles/updatePageStyle";

const initialState = {
  timing: "",
  rate: "",
  comment: "",
};

const UpdateMusicForm = ({ setRefresh, music }) => {
  const { timing, rate, comment } = music;
  const updates = updatePageStyle();
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const [formdata, setFormData] = useState(initialState);

  useEffect(() => {
    setFormData({ ...formdata, timing: timing, rate: rate, comment: comment });
  }, []);
  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const onSubmit = (data) => {
    data.rate = formdata.rate;
    update(music.id, data).then(() => {
      setRefresh((rf) => rf + 1);
      setOpen(true);
    });
  };
  return (
    <React.Fragment>
      <Snackbar
        message="재평가 완료!"
        ContentProps={{
          className: updates.snackbar,
        }}
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
      />
      <form className={updates.content} onSubmit={handleSubmit(onSubmit)}>
        <Rating
          id="rate"
          name="rate"
          icon={<StarIcon fontSize="inherit" />}
          value={formdata.rate}
          onChange={handleChange}
        />
        <TextField
          id="timing"
          name="timing"
          variant="outlined"
          label="언제?"
          inputRef={register}
          value={formdata.timing}
          onChange={handleChange}
        />
        <TextField
          id="comment"
          name="comment"
          variant="outlined"
          label="한줄평"
          inputRef={register}
          value={formdata.comment}
          onChange={handleChange}
        />
        <IconButton type="submit"><DoneOutlineIcon/></IconButton>
      </form>
    </React.Fragment>
  );
};

export default UpdateMusicForm;
