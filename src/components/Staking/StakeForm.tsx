import React, { useState } from "react";

interface StakeFormProps {
  onStake?: (amount: string) => void;
  onUnstake?: (amount: string) => void;
}

const StakeForm: React.FC<StakeFormProps> = ({ onStake, onUnstake }) => {
  const [amount, setAmount] = useState("");

  return (
    <div className="stake-form">
      <input
        type="number"
        placeholder="Stake edilecek miktar"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => onStake?.(amount)}>Stake Et</button>
      <button onClick={() => onUnstake?.(amount)}>Çek</button>
    </div>
  );
};

export default StakeForm;
