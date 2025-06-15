import React from "react";
import StakeForm from "./StakeForm";
import StakingStats from "./StakingStats";
import StakingRewards from "./StakingRewards";
import StakeHistory from "./StakeHistory";

const StakingDashboard: React.FC = () => (
  <div className="staking-dashboard">
    <h2>Staking Paneli</h2>
    <StakingStats />
    <StakeForm />
    <StakingRewards />
    <StakeHistory />
  </div>
);

export default StakingDashboard;
