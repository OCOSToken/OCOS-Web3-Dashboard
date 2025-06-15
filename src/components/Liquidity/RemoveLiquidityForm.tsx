import React, { useState } from 'react';

interface RemoveLiquidityFormProps {
  poolName: string;
  maxShare: number;
  onRemove: (percent: number) => void;
  loading?: boolean;
}

const RemoveLiquidityForm: React.FC<RemoveLiquidityFormProps> = ({
  poolName,
  maxShare,
  onRemove,
  loading
}) => {
  const [percent, setPercent] = useState(100);

  return (
    <form
      className="bg-white rounded-xl p-4 shadow flex flex-col gap-4"
      onSubmit={e => {
        e.preventDefault();
        onRemove(percent);
      }}
    >
      <div>
        <label>Pool: {poolName}</label>
      </div>
      <div>
        <label>Withdraw (%)</label>
        <input
          type="range"
          min={1}
          max={100}
          value={percent}
          onChange={e => setPercent(Number(e.target.value))}
        />
        <div className="flex justify-between text-xs">
          <span>1%</span>
          <span>100%</span>
        </div>
      </div>
      <button type="submit" className="btn" disabled={loading}>
        {loading ? 'Withdrawing...' : 'Remove Liquidity'}
      </button>
    </form>
  );
};

export default RemoveLiquidityForm;
