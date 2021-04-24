import React, { memo } from 'react';
import PropTypes from 'prop-types';

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
// Clock.defaultProps = {
//   minutes: 5,
//   seconnds: 3,
// };

const NumberOrStringType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

Clock.propTypes = {
  minutes: NumberOrStringType.isRequired,
  seconds: NumberOrStringType.isRequired,
};

export default memo(Clock);
