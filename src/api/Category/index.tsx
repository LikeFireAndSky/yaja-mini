import axios from "axios";
import { fetchCatgoryProps } from "../../pages/Category/Category.types";

export const fetchCatgory = async ({
  pageParam,
  regionUrl,
  typeUrl,
  category_parkingUrl,
  category_cookingUrl,
  category_pickupUrl,
}: fetchCatgoryProps) => {
  const data = await axios.get(
    `/api/v1/accommodations?page=${pageParam}${regionUrl}${typeUrl}${category_parkingUrl}${category_cookingUrl}${category_pickupUrl}`,
  );
  return data.data;
};

export const postClickHeart = async (accommodationId: string) => {
  const data = await axios.post(`/api/vi/wish/${accommodationId}`);
  return data.data;
};

export const deleteClickHeart = async (accommodationId: string) => {
  const data = await axios.delete(`/api/vi/wish/${accommodationId}`);
  return data.data;
};
