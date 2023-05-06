import { BASE_URL } from ".";
import { Address } from "../models/address";

export const getAddress = async (address: string) => {
  const url = `${BASE_URL}/api/v2/addresses/${address}?with_sum=true`;

  const response = await fetch(url);
  if (response.ok) {
    const json = (await response.json()) as Address;
    return json;
  } else {
    throw new Error("Error while fetching address");
  }
};
