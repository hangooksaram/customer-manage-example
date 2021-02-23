import { makeStyles, theme } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: "5%",
  },
  head: {
    backgroundColor: theme.palette.primary.main,
    "& .MuiTableCell-root": {
      textAlign: "center",
    },
  },
  body: {
    "& .MuiTableCell-root": {
      textAlign: "center",
      "&:first-child": {
        color: "red",
        cursor: "pointer",
      },
    },
  },
  icon: {
    "&:hover": {
      color: "red",
      cursor: "pointer",
    },
  },
}));
