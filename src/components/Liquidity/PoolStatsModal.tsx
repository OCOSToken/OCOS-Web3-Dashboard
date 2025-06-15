import React from 'react';

interface PoolStatsModalProps {
  open: boolean;
  onClose: () => void;
  poolName: string;
  tvl: number;
  volume24h: number;
  apy: number;
  tokens: { name: string; percent: number }[];
}

const PoolStatsModal: React.FC<PoolStatsModalProps> = ({
  open,
  onClose,
  poolName,
  tvl,
  volume24h,
  apy,
  tokens
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-xl min-w-[360px]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">{poolName} Pool Stats</h3>
          <button onClick={onClose} className="btn-outline">X</button>
        </div>
        <div>TVL: <b>${tvl.toLocaleString()}</b></div>
        <div>24h Volume: <b>${volume24h.toLocaleString()}</b></div>
        <div>APY: <b>{apy}%</b></div>
        <div className="mt-4">Token Breakdown:</div>
        <ul>
          {tokens.map((token, idx) => (
            <li key={idx}>{token.name}: {token.percent}%</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PoolStatsModal;
