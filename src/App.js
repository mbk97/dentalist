import { Box, CssBaseline } from "@mui/material";
import { GlobalStyle, useStyles } from "./App.style";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
// import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import TechPage from "./pages/TechPage";
import ContactUS from "./pages/ContactUs";
function App() {
  const classes = useStyles();
  return (
    <>
      <GlobalStyle />
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
        <Navbar />
        <ContactUS />
      </Box>
      <Footer />
    </>
  );
}

export default App;
