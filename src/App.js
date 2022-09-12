import { Box } from "@mui/material";
import { useStyles } from "./App.style";
import Team from "./components/team/Team";
import CssBaseline from "@mui/material/CssBaseline";
import AboutUs from "./components/about/AboutUs";
import Dental from "./components/dental/Dental";
import Priority from "./components/priority/Priority";
import Canal from "./components/canals/Canal";
import News from "./components/news & article/News";

function App() {
  const classes = useStyles();

  return (
    <Box
      className={classes.componentWrapper}
      sx={(theme) => ({
        width: "100vw",
        [theme.breakpoints.down("sm")]: {
          padding: "0 10px",
        },
      })}
    >
      <CssBaseline />
      {/* <Team /> */}
      {/* <AboutUs /> */}
      {/* <Dental /> */}
      {/* <Priority /> */}
      <Canal />
      {/* <News /> */}
    </Box>
  );
}

export default App;
