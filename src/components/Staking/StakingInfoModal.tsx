import React from "react";

interface StakingInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StakingInfoModal: React.FC<StakingInfoModalProps> = ({ isOpen, onClose }) =>
  isOpen ? (
    <div className="modal">
      <div className="modal-content">
        <h4>Staking Haqqında</h4>
        <p>
          Staking, OCOS token-lərinizi hovuzda kilidləyərək passiv gəlir əldə etməyə imkan verir.
        </p>
        <button onClick={onClose}>Bağla</button>
      </div>
    </div>
  ) : null;

export default StakingInfoModal;
