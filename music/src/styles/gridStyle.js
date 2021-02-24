import { makeStyles, theme } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    width: "80%",
    height: "60%",
    margin: "5%",
  },
  container: {
    height: "70%",
    textAlign: "center",
  },
  paper: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  playing: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "#F7F3FF",
  },
  link: {
    "&:hover": {
      fontWeight: "bold",
    },

    cursor: "pointer",
  },
  icon: {
    "&:hover": {
      color: "red",
      cursor: "pointer",
    },
  },
}));
