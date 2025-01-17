import { useNavigate } from "react-router-dom";
import CategoryBanner from "../../components/Category/CategoryBanner";
import CategoryQuery from "../../components/Category/CategoryQuery";
import * as Styled from "./SearchList.styles";
import useGetValidParams from "../../hooks/useGetValidParams";
import SearchListBanner from "../../components/SearchListBanner";

const SearchList = () => {
  const validParams = useGetValidParams();

  const firstText = "숙소를";
  const secondText = "찾으셨나요?";
  const router = useNavigate();

  const handleClickSearch = () => {
    router("/search");
  };
  return (
    <Styled.SearchResultContainer>
      <CategoryBanner
        firstText={firstText}
        secondText={secondText}
        searchFn={handleClickSearch}
      />
      <Styled.ItemWrapper>
        <SearchListBanner validParams={validParams} />
        <CategoryQuery
          regionNumber={validParams.region}
          accommodationNumber={validParams.type}
          category_parking={validParams.category_parking}
          category_cooking={validParams.category_cooking}
          category_pickup={validParams.category_pickup}
        />
      </Styled.ItemWrapper>
    </Styled.SearchResultContainer>
  );
};

export default SearchList;
