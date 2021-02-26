import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, IconButton, Paper, Modal, Backdrop, InputAdornment, Tooltip } from "@material-ui/core";
import addModalStyle from "../styles/addModalStyle";
import { create } from "../api/MusicService";
import Rating from "@material-ui/lab/Rating";
import StarIcon from "@material-ui/icons/Star";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const initialState = {
  id: null,
  title: "",
  timing: "",
  rate: "",
  comment: "",
  link: "",
};

const helpText = `soundcloud, youtube, facebook, dailymotion, vimeo, twitch 의 링크만 넣어주세요!`

const AddMusicForm = ({ refresh, setRefresh, open, closeModal }) => {
  const { register, handleSubmit } = useForm();
  const modal = addModalStyle();
  const [formdata, setFormData] = useState(initialState);
  const onSubmit = (data) => {
    data.id = null;
    data.rate = formdata.rate;
    create(data).then(() => {
      if (refresh > 100) setRefresh(0);
      else setRefresh((rf) => rf + 1);
      closeModal();
      setFormData({});
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  return (
    <Modal
      onClose={closeModal}
      open={open}
      className={modal.root}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Paper className={modal.container}>
        <form className={modal.content} onSubmit={handleSubmit(onSubmit)}>
          <Rating
            id="rate"
            name="rate"
            icon={<StarIcon fontSize="inherit" />}
            value={formdata.rate}
            onChange={handleChange}
          />
          <TextField
            autoComplete={false}
            variant="outlined"
            id="title"
            name="title"
            label="제목"
            inputRef={register({ required: true, maxLength: 5 })}
            value={formdata.title}
            onChange={handleChange}            
          />
          <TextField
            autoComplete={false}
            variant="outlined"
            id="timing"
            name="timing"
            label="언제?"
            inputRef={register}
            value={formdata.timing}
            onChange={handleChange}
          />

          <TextField
            autoComplete={false}
            variant="outlined"
            id="comment"
            name="comment"
            label="한줄평"
            inputRef={register}
            value={formdata.comment}
            onChange={handleChange}
          />
          <TextField
            autoComplete={false}
            variant="outlined"
            id="link"
            name="link"
            label="링크"
            helperText="해당 노래를 들을 수 있는 주소를 적어주세요!"
            inputRef={register}
            value={formdata.link}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title={helpText}>
                  <HelpOutlineIcon/>
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />
          <IconButton type="submit"><Tooltip><DoneOutlineIcon/></Tooltip></IconButton>     
        </form>
      </Paper>
    </Modal>
  );
};

export default AddMusicForm;
