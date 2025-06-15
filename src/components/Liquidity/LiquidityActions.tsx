import React from 'react';

interface LiquidityActionsProps {
  onAdd: () => void;
  onRemove: () => void;
  onClaim?: () => void;
  disableAdd?: boolean;
  disableRemove?: boolean;
  disableClaim?: boolean;
}

const LiquidityActions: React.FC<LiquidityActionsProps> = ({
  onAdd,
  onRemove,
  onClaim,
  disableAdd,
  disableRemove,
  disableClaim
}) => (
  <div className="flex gap-3">
    <button className="btn" onClick={onAdd} disabled={disableAdd}>Add</button>
    <button className="btn" onClick={onRemove} disabled={disableRemove}>Remove</button>
    {onClaim && (
      <button className="btn-outline" onClick={onClaim} disabled={disableClaim}>Claim</button>
    )}
  </div>
);

export default LiquidityActions;
