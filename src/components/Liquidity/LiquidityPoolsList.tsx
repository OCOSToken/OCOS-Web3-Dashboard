import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PoolStatsModal } from "./PoolStatsModal";
import { getOcosPools } from "@/utils/api"; // Custom API utility for fetching pools
import { formatCurrency } from "@/utils/formatters";
import { Loader } from "@/components/Loader";

export interface Pool {
  id: string;
  pair: string;
  tokens: { symbol: string; icon: string }[];
  tvl: number;
  volume24h: number;
  apy: number;
  userShare: number;
  contractAddress: string;
}

const LiquidityPoolsList: React.FC = () => {
  const [pools, setPools] = useState<Pool[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedPool, setSelectedPool] = useState<Pool | null>(null);

  useEffect(() => {
    const fetchPools = async () => {
      setLoading(true);
      try {
        // Fetch pools from PancakeSwap or backend API
        const data = await getOcosPools();
        setPools(data);
      } catch (error) {
        console.error("Error fetching pools:", error);
      }
      setLoading(false);
    };
    fetchPools();
  }, []);

  if (loading) {
    return <Loader text="Loading OCOS liquidity pools..." />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {pools.map((pool) => (
        <Card
          key={pool.id}
          className="cursor-pointer hover:shadow-2xl transition"
          onClick={() => setSelectedPool(pool)}
        >
          <CardContent className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              {pool.tokens.map((token) => (
                <img
                  key={token.symbol}
                  src={token.icon}
                  alt={token.symbol}
                  className="w-7 h-7 rounded-full border"
                />
              ))}
              <span className="text-lg font-bold">{pool.pair}</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span>TVL:</span>
              <span>{formatCurrency(pool.tvl, "USD")}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>24h Volume:</span>
              <span>{formatCurrency(pool.volume24h, "USD")}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>APY:</span>
              <span>{pool.apy.toFixed(2)}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Your Share:</span>
              <span>{pool.userShare > 0 ? `${pool.userShare.toFixed(4)}%` : "-"}</span>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Pool analytics modal */}
      {selectedPool && (
        <PoolStatsModal
          pool={selectedPool}
          onClose={() => setSelectedPool(null)}
        />
      )}
    </div>
  );
};

export default LiquidityPoolsList;
