import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    width: "80%",
    height: "60%",
    margin: "1%",
    display: "flex",
    alignItems: "center",
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
    "& .MuiTypography-root:first-child": {
      backgroundColor: theme.palette.primary.dark,
      cursor: "default",
      fontSize: "1.2em",
      marginBottom: "10%",
      draggable: "none",
    },
    "& .MuiTypography-root:nth-child(2)": {
      backgroundColor: theme.palette.primary.light,
      cursor: "default",
      fontSize: "1.2em",
      marginTop: "10%",
    },
  },
  link: {
    "&:hover": {
      fontWeight: "bold",
    },
    cursor: "pointer",
  },
  deleteIcon: {
    "&:hover": {
      color: "#FF4B4B",
      cursor: "pointer",
    },
  },
  updateIcon: {
    "&:hover": {
      color: "#4B94FF",
      cursor: "pointer",
    },
  },
  detailIcon: {
    "&:hover": {
      color: "#FFC163",
      cursor: "pointer",
    },
  },
}));
