import React, { useState } from 'react';

interface AddLiquidityFormProps {
  tokenA: string;
  tokenB: string;
  balanceA: number;
  balanceB: number;
  onAdd: (amountA: number, amountB: number) => void;
  loading?: boolean;
}

const AddLiquidityForm: React.FC<AddLiquidityFormProps> = ({
  tokenA,
  tokenB,
  balanceA,
  balanceB,
  onAdd,
  loading
}) => {
  const [amountA, setAmountA] = useState(0);
  const [amountB, setAmountB] = useState(0);

  return (
    <form
      className="bg-white rounded-xl p-4 shadow flex flex-col gap-4"
      onSubmit={e => {
        e.preventDefault();
        onAdd(amountA, amountB);
      }}
    >
      <div>
        <label>{tokenA} Amount</label>
        <input
          type="number"
          min={0}
          max={balanceA}
          value={amountA}
          onChange={e => setAmountA(Number(e.target.value))}
          className="input"
        />
        <div className="text-xs text-gray-500">Balance: {balanceA}</div>
      </div>
      <div>
        <label>{tokenB} Amount</label>
        <input
          type="number"
          min={0}
          max={balanceB}
          value={amountB}
          onChange={e => setAmountB(Number(e.target.value))}
          className="input"
        />
        <div className="text-xs text-gray-500">Balance: {balanceB}</div>
      </div>
      <button type="submit" className="btn" disabled={loading}>
        {loading ? 'Adding...' : 'Add Liquidity'}
      </button>
    </form>
  );
};

export default AddLiquidityForm;
