import { useQuery } from "@tanstack/react-query";
import { getMyWishList } from "./index";

export const useGetMyWishList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["wish"],
    queryFn: getMyWishList,
  });

  return { data, isLoading, error };
};
