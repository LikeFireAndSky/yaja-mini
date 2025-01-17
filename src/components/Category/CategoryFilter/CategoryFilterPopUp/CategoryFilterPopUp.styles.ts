import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

export const CategoryFilterPopUpContainer = styled(motion.div)`
  position: relative;

  display: flex;
  align-items: center;

  gap: 0.5rem;
`;

export const CategoryButton = styled(Button)`
  width: 100%;
  padding: 0.5rem 1rem;

  color: white;
  border-radius: 10px;
  background-color: #191554;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));

  &:hover {
    background-color: #ff5100;
  }
`;

type CategoryPopUpProps = {
  isOpen: boolean;
};

export const CategoryPopUp = styled(motion.ul)<CategoryPopUpProps>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;

  position: absolute;
  top: 100%;
  gap: 0.5rem;
  z-index: 99;

  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  margin-top: 0.5rem;

  border-radius: 10px;
  background-color: white;
`;

export const CategoryPopUpItem = styled.li`
  padding: 0.5rem 1rem;

  border-radius: 10px;
  color: #222;

  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));
  &:hover {
    background-color: #ff5100;
  }
`;

export const CategoryChoiceValue = styled.span`
  white-space: nowrap;

  font-weight: bold;
  color: #ff5100;
`;
