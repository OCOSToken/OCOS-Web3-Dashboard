export interface StakingTransaction {
  date: string;
  type: "Stake" | "Unstake" | "Claim";
  amount: string;
}

export interface StakingStats {
  apr: number;
  totalStaked: string;
  tvl: string;
}
