import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Snackbar, Slide } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import StarIcon from "@material-ui/icons/Star";
import { update } from "../services/MusicService";
import Alert from "@material-ui/lab/Alert";
import updateStyle from "../styles/updateStyle";

const initialState = {
  timing: "",
  rate: "",
  comment: "",
};

const UpdateMusicForm = ({ setRefresh, music }) => {
  const { timing, rate, comment } = music;
  const updates = updateStyle();
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();
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
      <Snackbar message="재평가 완료!" ContentProps={{
          className : updates.snackbar
        }} TransitionComponent={Slide} anchorOrigin={{vertical : "bottom", horizontal : "left"}} open={open} autoHideDuration={1000} onClose={handleClose}/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Rating
          id="rate"
          name="rate"
          icon={<StarIcon fontSize="inherit" />}
          value={formdata.rate}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          placeholder="언제?"
          id="timing"
          name="timing"
          inputRef={register}
          value={formdata.timing}
          onChange={handleChange}
        />

        <TextField
          variant="outlined"
          placeholder="한줄평"
          id="comment"
          name="comment"
          inputRef={register}
          value={formdata.comment}
          onChange={handleChange}
        />
        <Button type="submit">확인</Button>
      </form>
    </React.Fragment>
  );
};

export default UpdateMusicForm;
