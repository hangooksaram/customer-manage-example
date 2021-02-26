import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  root: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    height: "12%",
    top: "0%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "0% 10%",
  },
  box: {
    overflow: "hidden",
    width: "100%",
  },
  playing: {
    animation: `$playing-anime 4s infinite ease-in`,
    cursor: "default",
    fontSize: "1em",
    overflow: "hidden",
  },
  "@keyframes playing-anime": {
    "0%": {},
    "100%": {
      transform: "translate(500px)",
    },
  },
}));
