import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { fetchOcosPoolsData, fetchOcosTVL } from "../../utils/api";
import { ReactComponent as OcosLogo } from "../../assets/logos/ocos.svg";

interface PoolInfo {
  name: string;
  pairAddress: string;
  tvl: number;
  apr: number;
}

const LiquidityOverview: React.FC = () => {
  const [tvl, setTVL] = useState<number>(0);
  const [pools, setPools] = useState<PoolInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const [tvlData, poolsData] = await Promise.all([
        fetchOcosTVL(),
        fetchOcosPoolsData()
      ]);
      setTVL(tvlData);
      setPools(poolsData);
      setIsLoading(false);
    };
    loadData();
  }, []);

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl p-8 flex flex-col gap-8">
      <div className="flex items-center gap-3">
        <OcosLogo width={36} />
        <h2 className="text-2xl font-bold">OCOS Liquidity Overview</h2>
      </div>
      {isLoading ? (
        <div className="animate-pulse text-gray-500">Loading statistics...</div>
      ) : (
        <>
          <div className="flex flex-wrap gap-10">
            <div className="flex flex-col items-center">
              <span className="text-lg text-gray-400">Total TVL</span>
              <span className="text-3xl font-semibold">
                ${tvl.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg text-gray-400">Active Pools</span>
              <span className="text-3xl font-semibold">{pools.length}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg text-gray-400">Top Pool</span>
              <span className="text-xl font-medium">
                {pools.length ? pools[0].name : "-"}
              </span>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-3">Pool Statistics</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-transparent">
                <thead>
                  <tr className="text-left border-b border-gray-200">
                    <th className="py-2 pr-6">Pool</th>
                    <th className="py-2 pr-6">TVL</th>
                    <th className="py-2 pr-6">APR</th>
                  </tr>
                </thead>
                <tbody>
                  {pools.map((pool, i) => (
                    <tr key={pool.pairAddress} className="border-b border-gray-100">
                      <td className="py-2 pr-6">{pool.name}</td>
                      <td className="py-2 pr-6">
                        ${pool.tvl.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                      </td>
                      <td className="py-2 pr-6">
                        {pool.apr > 0 ? `${pool.apr.toFixed(2)}%` : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LiquidityOverview;
