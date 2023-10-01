import { baseUrl } from "../config";
import { buildURLWithFilters } from "../generateUrlFromFilters";

export const getTransactions = async (filters, page = 1) => {
  try {
    const url = buildURLWithFilters(
      `${baseUrl}/transactions/search`,
      filters,
      page
    );
    const response = await fetch(url, {
      method: "GET"
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to fetch transactions");
    }
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};