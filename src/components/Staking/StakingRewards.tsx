import React from "react";

interface StakingRewardsProps {
  rewards?: string;
  onClaim?: () => void;
}

const StakingRewards: React.FC<StakingRewardsProps> = ({
  rewards = "0.00",
  onClaim
}) => (
  <div className="staking-rewards">
    <div>Kazanılmış Ödüller: <strong>{rewards} OCOS</strong></div>
    <button onClick={onClaim}>Ödülleri Talep Et</button>
  </div>
);

export default StakingRewards;
