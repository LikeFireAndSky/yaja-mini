import * as Styled from "./Button.styles";
import ResetIcon from "../../../assets/svg/reset-btn.svg";
import SearchIcon from "../../../assets/svg/search-icon.svg";
import { SearchButtonProps, SearchResetButtonProps } from "./Button.types";

export const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  return (
    <Styled.SearchButton onClick={onClick}>
      <img src={SearchIcon} alt="search" />
      검색
    </Styled.SearchButton>
  );
};

export const SearchResetButton: React.FC<SearchResetButtonProps> = ({
  onClick,
}) => {
  return (
    <Styled.SearchResetButton onClick={onClick}>
      다시 검색하기
      <img src={ResetIcon} alt="search-reset" />
    </Styled.SearchResetButton>
  );
};
