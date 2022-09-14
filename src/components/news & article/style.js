import { makeStyles } from "@mui/styles";
import styled from "styled-components";

const InputButton = styled.button`
  padding: 10px 10px;
  display: flex;
  align-items: center;
  border: 0;
  background: #583fbc;
  color: #ffffff;
  border-radius: 12px;
  width: 107px;
  height: 48px;
  cursor: pointer;
`;

const NewsInput = styled.input`
  background: #ffffff;
  padding-left: 10px;
  border: 0;
  outline: 0;

  &:focus {
    border: 0;
    outline: 0;
  }
`;

const InputWrapper = styled.div`
  border: 1px solid rgba(24, 25, 69, 0.1);
  border-radius: 16px;
  height: 60px;
  width: 440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const useStyles = makeStyles((theme) => ({
  buttonPosition: {
    position: "absolute",
    top: "10px",
    right: "48px",
  },
}));

export { useStyles, InputButton, NewsInput, InputWrapper };
