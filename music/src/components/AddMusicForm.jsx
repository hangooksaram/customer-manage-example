import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Paper,
  Modal,
  Backdrop,
  styled,
} from "@material-ui/core";
import modalStyle from "../styles/modalStyle";
import { create } from "../services/MusicService";
import Rating from '@material-ui/lab/Rating';
import StarIcon from '@material-ui/icons/Star';

const initialState = {
  id: null,
  title: "",
  timing: "",
  rate: "",
  comment: "",
  link: "",
};

const AddMusicForm = ({ refresh, setRefresh, open, closeModal }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const modal = modalStyle();
  const [formdata, setFormData] = useState(initialState);
  const onSubmit = (data) => {    
    data.id = null;
    data.rate = formdata.rate;
    create(data).then(() => {
      if (refresh > 100) setRefresh(0);
      else setRefresh((rf) => rf + 1);
      closeModal();
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
            //inputRef={register}
            icon={<StarIcon fontSize="inherit" />} 
            value={formdata.rate}
            onChange={handleChange}
          />
          <TextField
            autoComplete={false}
            variant="outlined"
            placeholder="제목"
            id="title"
            name="title"
            inputRef={register}
            value={formdata.title}
            onChange={handleChange}
          />
          <TextField
            autoComplete={false}
            variant="outlined"
            placeholder="언제?"
            id="timing"
            name="timing"
            inputRef={register}
            value={formdata.timing}
            onChange={handleChange}
          />
          
          <TextField
            autoComplete={false}
            variant="outlined"
            placeholder="한줄평"
            id="comment"
            name="comment"
            inputRef={register}
            value={formdata.comment}
            onChange={handleChange}
          />
          <TextField
            autoComplete={false}
            variant="outlined"
            placeholder="주소"
            id="link"
            name="link"
            inputRef={register}
            value={formdata.link}
            onChange={handleChange}
          />
          <Button type="submit">확인</Button>
        </form>
      </Paper>
    </Modal>
  );
};

export default AddMusicForm;
