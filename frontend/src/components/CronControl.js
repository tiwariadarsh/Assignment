import React from "react";
import "../styles/CronControl.css";
const CronControl = ({ isCronRunning, onStartCron, onStopCron }) => {
  return (
    <div className="cronControl">
      <h2>CRON Job</h2>
      <div>
        <button onClick={onStartCron} disabled={isCronRunning} data-testid = "cron-job-active">
          Generate Transactions
        </button>
        <button onClick={onStopCron} disabled={!isCronRunning}>
          Stop Generating
        </button>
      </div>
      <p>{isCronRunning ? "Transactions generation is running" : "Transactions generation is stopped"}</p>
    </div>
  );
};

export default CronControl;