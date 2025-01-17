import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const SearchButton = styled(Button)`
  display: flex;
  justify-content: center;

  max-width: object-fit;

  height: 3rem;
  padding: 0 5em;

  color: black;
  background-color: white;
  border-radius: 20px;

  font-weight: 700;
  font-size: 1.2rem;

  &:hover {
    background-color: #191554;
    border: 1px solid white;
    color: white;
  }
`;
