import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
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
  playingContainer: {
    display: "flex",
    justifyContent: "center",
    borderRadius: "5%",
    boxShadow: `0px 0px 20px ${theme.palette.primary.dark}`,
  },
  playing: {
    animation: `$playing-anime 4s infinite ease-in-out`,
    marginLetf: "2%",
    cursor: "default",
    fontSize: "1em",
  },
  notPlaying: {
    marginLetf: "10%",
    cursor: "default",
    fontSize: "1em",
  },
  "@keyframes playing-anime": {
    "0%": {
      transform: "translate(-20px)",
    },
    "50%": {
      transform: "translate(40px)",
    },
    "100%": {
      transform: "translate(-20px)",
    },
  },
}));
