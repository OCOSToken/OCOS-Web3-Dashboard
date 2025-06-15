import React from 'react';

export interface LiquidityPoolItemProps {
  tokenA: string;
  tokenB: string;
  tvl: number;
  apy: number;
  userShare?: number;
  onAddLiquidity: () => void;
  onRemoveLiquidity: () => void;
  onShowStats: () => void;
}

const LiquidityPoolItem: React.FC<LiquidityPoolItemProps> = ({
  tokenA,
  tokenB,
  tvl,
  apy,
  userShare,
  onAddLiquidity,
  onRemoveLiquidity,
  onShowStats,
}) => (
  <div className="bg-white rounded-2xl shadow p-4 flex flex-col gap-2 hover:shadow-lg transition">
    <div className="flex items-center gap-3">
      <span className="font-bold text-lg">{tokenA}/{tokenB}</span>
      {userShare !== undefined && (
        <span className="ml-auto text-xs text-primary">Your Share: {userShare}%</span>
      )}
    </div>
    <div className="flex gap-8 mt-2 text-sm">
      <div>TVL: <b>${tvl.toLocaleString()}</b></div>
      <div>APY: <b>{apy}%</b></div>
    </div>
    <div className="flex gap-2 mt-3">
      <button className="btn" onClick={onAddLiquidity}>Add Liquidity</button>
      <button className="btn" onClick={onRemoveLiquidity}>Remove</button>
      <button className="btn-outline ml-auto" onClick={onShowStats}>Stats</button>
    </div>
  </div>
);

export default LiquidityPoolItem;
