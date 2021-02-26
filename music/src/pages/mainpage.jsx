import React, { useState } from "react";
import AddMusicForm from "../components/AddMusicForm";
import MusicList from '../components/MusicList';

const MainPage = () => {
  const [refresh, setRefresh] = useState(0);
  const [open, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <MusicList/>
      <AddMusicForm
        refresh={refresh}
        setRefresh={setRefresh}
        open={open}
        closeModal={closeModal}
      />
    </React.Fragment>
  );
};

export default MainPage;
