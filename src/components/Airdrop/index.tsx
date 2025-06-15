import React from "react";
import AirdropInfo from "./AirdropInfo";
import AirdropClaim from "./AirdropClaim";
import AirdropStatus from "./AirdropStatus";
import AirdropProgress from "./AirdropProgress";
import AirdropHistory from "./AirdropHistory";
import styles from "./styles.module.css";

const Airdrop: React.FC = () => (
  <div className={styles.airdropPanel}>
    <AirdropInfo />
    <AirdropStatus />
    <AirdropClaim />
    <AirdropProgress />
    <AirdropHistory />
  </div>
);

export default Airdrop;
