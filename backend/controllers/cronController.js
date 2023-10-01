import cron from "node-cron";
import { createTransactionService } from "../services/transactionService.js";
import { generateTransactionID } from "../utils/generateTransactionId.js";

let cronJob;

export const startCronJob = () => {
  let requestCount = 0;
  const maxRequests = 50;

  cronJob = cron.schedule("*/1 * * * * *", async () => {
    if (requestCount >= maxRequests) {
      console.log("Request limit reached. Stopping cron job.");
      cronJob.stop();
      return;
    }
    const newTransaction = {
      transactionID: generateTransactionID(),
      amount: Math.random() * 100,
      description: "Generated Transaction",
    };
    requestCount++;
    await createTransactionService(newTransaction);
  });

  console.log("cron start");
  cronJob.start();
};

export const stopCronJob = () => {
  if (cronJob) {
    console.log("cron stop");
    cronJob.stop();
  }
};