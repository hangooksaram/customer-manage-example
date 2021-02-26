import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    boxShadow: `5px 5px 5px ${theme.palette.primary.dark}`,
  },
  content: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
