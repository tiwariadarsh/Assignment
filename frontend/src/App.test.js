import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Application", () => {
  render(<App />);
  const linkElement = screen.getByText(/Transaction API Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});

test("Add a Transaction and Filter Transaction", () => {
  render(<App />);
  const linkElement1 = screen.getByText("Add a Transaction");
  const linkElement2 = screen.getByText("Filter Transactions");
  expect(linkElement1 && linkElement2).toBeInTheDocument();
});

test("Initially cron job is on hold and transaction generation button should activate the cron job", async () => {
  render(<App />);
  const before_CRON = "Transactions generation is stopped";
  const after_CRON = "Transactions generation is running";
  const linkElement = screen.getByText(before_CRON);
  expect(linkElement).toBeInTheDocument();
  
  // Trigger the click event asynchronously and wait for 2 seconds
  screen.getByTestId("cron-job-active").click();
  await new Promise(resolve => setTimeout(resolve, 2000));

  const linkElement1 = screen.getByText(after_CRON);
  expect(linkElement1).toBeInTheDocument();
});

test("There should be only 5 transaction on a page, not more than 5",  async () => {
  render(<App/>);
  await new Promise(resolve => setTimeout(resolve, 3000));
  const linkElement = screen.getAllByTestId("single-transaction");
  expect(linkElement).toHaveLength(5);
})

test("Checking the sorting functionality by soting all the transactions in ascending order based on Amount", async () => {
  render(<App/>);
  await new Promise(resolve => setTimeout(resolve, 2000));
  screen.getByTestId("amount-sorting-button").click();
  screen.getByTestId("asc-sorting-button").click();
  screen.getByText("Apply Sorting").click();
  await new Promise(resolve => setTimeout(resolve, 1000));
  const linkElements = screen.getAllByTestId("single-transaction");

// Create an array to store the values of the 3rd div in each set
const Amounts = [];

linkElements.forEach((element) => {
    const thirdDiv = element.querySelector('div:nth-child(3)');
    if (thirdDiv) {
      Amounts.push(thirdDiv.textContent);
    }
});

//every values int the array should be in the sorted order from left to right
for(var i = 1; i < 5; i++){
  expect(Amounts[i] > Amounts[i-1]).toBeTruthy();
}
})