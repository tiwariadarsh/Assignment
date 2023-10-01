import express from "express";
//import { authenticateToken } from "../middlewares/authMiddleware.js";
import {
  createTransaction,
  getTransaction,
  searchTransactions,
  generateTransactionReport,
} from "../controllers/transactionController.js";
import { startCronJob, stopCronJob } from "../controllers/cronController.js";

const transactionRoutes = express.Router();

transactionRoutes.post("/create", createTransaction);
transactionRoutes.get(
  "/getTransactionById/:transactionID",
  getTransaction
);
transactionRoutes.get("/search", searchTransactions);
transactionRoutes.get("/report", generateTransactionReport);
transactionRoutes.post("/cron/start", (req, res) => {
  startCronJob();
  res.json({ message: "CRON job started" });
});

transactionRoutes.post("/cron/stop", (req, res) => {
  stopCronJob();
  res.json({ message: "CRON job stopped" });
});

export default transactionRoutes;
