import { Box, CssBaseline } from "@mui/material";
import { GlobalStyle, useStyles } from "./App.style";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import TechPage from "./pages/TechPage";
import ContactUS from "./pages/ContactUs";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/technology" element={<TechPage />} />
          <Route path="/contact" element={<ContactUS />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;
