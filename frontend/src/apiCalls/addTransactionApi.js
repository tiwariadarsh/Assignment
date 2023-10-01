import { baseUrl } from "../config";

export const addTransaction = async (newTransaction) => {
 // console.log(JWTtoken);
  try {
    const response = await fetch(`${baseUrl}/transactions/create`, {
      method: "POST",
      body: JSON.stringify(newTransaction),
    });
    console.log(response);
    if (response.ok) {
      // Transaction created successfully
      return response.json();
    } else {
      throw new Error("Failed to create transaction");
    }
  } catch (error) {
    console.error("Error creating transaction:", error);
    throw error;
  }
};
