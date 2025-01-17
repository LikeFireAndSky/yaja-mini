import { useCategoryInfiniteQuery } from "../../../hooks/useCategoryInfiniteQuery";
import InfiniteScroller from "../InfiniteScroller";
import CategoryItemWrapper from "../CategoryItemWrapper";

export type CategoryQueryProps = {
  regionNumber: number;
  accommodationNumber: number;
  category_parking?: number;
  category_cooking?: number;
  category_pickup?: number;
};

const CategoryQuery = ({
  regionNumber = 99,
  accommodationNumber = 99,
  category_parking = 2,
  category_cooking = 2,
  category_pickup = 2,
}: CategoryQueryProps) => {
  const { data, fetchNextPage, hasNextPage, isLoading } =
    useCategoryInfiniteQuery({
      region: regionNumber,
      type: accommodationNumber,
      category_parking: category_parking,
      category_cooking: category_cooking,
      category_pickup: category_pickup,
    });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <InfiniteScroller
        length={data?.pages.length}
        fn={fetchNextPage}
        hasNextPage={hasNextPage}
      >
        {data && <CategoryItemWrapper data={data.pages} />}
      </InfiniteScroller>
    </>
  );
};

export default CategoryQuery;
