import { Box } from "@mui/material";
import { useStyles } from "./App.style";
import Team from "./components/team/Team";
import CssBaseline from "@mui/material/CssBaseline";
import AboutUs from "./components/about/AboutUs";
import Dental from "./components/dental/Dental";
import Priority from "./components/priority/Priority";
import Canal from "./components/canals/Canal";
import News from "./components/news & article/News";
import Gallery from "./components/gallery/Gallery";
import Syptoms from "./components/symptoms/Syptoms";
import Clinic from "./components/clinic/Clinic";
import Safety from "./components/safety/Safety";
import Features from "./components/features/Features";
import Intro from "./components/intro/Intro";

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
      {/* <Canal /> */}
      {/* <News /> */}
      {/* <Gallery /> */}
      {/* <Syptoms /> */}
      {/* <Clinic /> */}
      {/* <Safety /> */}
      {/* <Features /> */}
      <Intro />
    </Box>
  );
}

export default App;
