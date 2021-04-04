/* eslint-disable react/prop-types */
import React, { memo } from 'react';

const ProgressBar = ({ percent = 99 }) => (
  <div className="progress-bar">
    <div style={{ width: `${percent}%` }} />
  </div>
);

export default memo(ProgressBar);
