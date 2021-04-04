import React, { memo } from 'react';

const Clock = () => {
  const minutes = 13;
  const seconds = 15;

  return (
    <h2 className="clock">
      Pozostało {minutes}:{seconds}
    </h2>
  );
};

export default memo(Clock);
