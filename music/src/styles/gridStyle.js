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
    boxShadow: `5px 5px 5px ${theme.palette.primary.main}`,
  },
  playing: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: theme.palette.primary.light,
    boxShadow: `5px 5px 5px ${theme.palette.primary.dark}`,
  },
  detail: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    boxShadow: `5px 5px 5px ${theme.palette.primary.dark}`,
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
