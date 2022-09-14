import styled from "styled-components";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  flexWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const GalleryGrid = styled.div`
  display: flex;
  width: 95vw;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 3rem;
`;

export { useStyles, GalleryGrid };
