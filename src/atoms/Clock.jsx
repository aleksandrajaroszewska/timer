/* eslint-disable react/prop-types */
import React, { memo } from 'react';

const Clock = ({ inactive, minutes, seconds }) => {
  return (
    <div>
      <h2 className={inactive === true ? 'clock inactive' : 'clock'}>
        {`Pozostało ${minutes} :
           ${seconds}`}
      </h2>
    </div>
  );
};

export default memo(Clock);
