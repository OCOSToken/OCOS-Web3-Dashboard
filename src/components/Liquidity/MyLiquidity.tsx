import React from 'react';

interface MyLiquidityProps {
  pools: {
    poolName: string;
    share: number;
    rewards: number;
    onClaim: () => void;
  }[];
}

const MyLiquidity: React.FC<MyLiquidityProps> = ({ pools }) => (
  <div className="space-y-4">
    <h2 className="font-bold text-lg">My Liquidity Positions</h2>
    {pools.map((pool, idx) => (
      <div key={idx} className="bg-gray-100 rounded-xl p-4 flex justify-between items-center">
        <div>
          <div className="font-semibold">{pool.poolName}</div>
          <div className="text-xs">Your Share: {pool.share}%</div>
          <div className="text-xs">Rewards: {pool.rewards} OCOS</div>
        </div>
        <button className="btn" onClick={pool.onClaim}>Claim Rewards</button>
      </div>
    ))}
  </div>
);

export default MyLiquidity;
