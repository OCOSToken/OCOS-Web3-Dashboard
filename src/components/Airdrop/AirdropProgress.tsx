import React from "react";

const AirdropProgress: React.FC = () => (
  <div>
    <label>Airdrop Proqresi: </label>
    <progress value={550000} max={1000000} />
    <span>550,000 / 1,000,000 OCOS claim edildi</span>
  </div>
);

export default AirdropProgress;
