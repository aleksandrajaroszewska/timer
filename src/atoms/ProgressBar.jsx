/* eslint-disable react/prop-types */
import React, { memo } from 'react';

const ProgressBar = ({ percent, inactive }) => (
  <div className={inactive === true ? 'progress-bar inactive' : 'progress-bar'}>
    <div style={{ width: `${percent}%` }} />
  </div>
);

export default memo(ProgressBar);
