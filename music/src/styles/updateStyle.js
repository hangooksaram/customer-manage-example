import { makeStyles, theme } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "25%",
    height: "60%",
    paddingTop: "5%",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "70%",
    padding: "11% 3%",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  snackbar: {
    backgroundColor: theme.palette.primary.main,
    color: "black",
  },
}));
