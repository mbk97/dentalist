import { makeStyles } from "@mui/styles";
import { createGlobalStyle } from "styled-components";

export const useStyles = makeStyles((theme) => ({
  componentWrapper: {
    padding: "0 60px",
    // background: "red",
    // marginLeft: "60px",
  },
}));

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  font-family: "Noticia Text", serif;

}

  body {
    margin: 0;
    padding: 0;
    background: #e4e6f1;
   overflow-x: hidden;


  }
`;
