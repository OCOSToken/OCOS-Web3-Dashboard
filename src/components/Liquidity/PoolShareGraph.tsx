import React from 'react';
// Optional: Use recharts or chart.js for real charts

interface PoolShareGraphProps {
  tokens: { name: string; percent: number; color?: string }[];
  userShare?: number;
}

const PoolShareGraph: React.FC<PoolShareGraphProps> = ({ tokens, userShare }) => (
  <div className="p-4 bg-white rounded-2xl shadow">
    <h4 className="mb-2 font-bold">Pool Share</h4>
    <div className="flex gap-2">
      {tokens.map((token, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div
            className="rounded-full w-8 h-8"
            style={{ background: token.color || "#EEE" }}
            title={token.name}
          ></div>
          <div className="text-xs mt-1">{token.name}: {token.percent}%</div>
        </div>
      ))}
    </div>
    {userShare !== undefined && (
      <div className="mt-2 text-primary font-bold text-sm">
        Your Pool Share: {userShare}%
      </div>
    )}
  </div>
);

export default PoolShareGraph;
