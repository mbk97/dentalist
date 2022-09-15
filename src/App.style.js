import { makeStyles } from "@mui/styles";
import { createGlobalStyle } from "styled-components";

export const useStyles = makeStyles((theme) => ({
  componentWrapper: {
    padding: "0 40px",
    // background: "red",
    // marginLeft: "60px",
  },
}));

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
  background: #e4e6f1;

  }
`;
