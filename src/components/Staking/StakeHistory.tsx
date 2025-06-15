import React from "react";

const dummyHistory = [
  { date: "2025-06-01", type: "Stake", amount: "1000 OCOS" },
  { date: "2025-06-05", type: "Unstake", amount: "500 OCOS" }
];

const StakeHistory: React.FC = () => (
  <div className="stake-history">
    <h4>İşlem Geçmişi</h4>
    <ul>
      {dummyHistory.map((item, idx) => (
        <li key={idx}>
          {item.date} – {item.type} – {item.amount}
        </li>
      ))}
    </ul>
  </div>
);

export default StakeHistory;
