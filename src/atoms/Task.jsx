/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { memo } from 'react';

const Task = ({ title, totalTime, onEdit, onDelete, onChoose }) => {
  return (
    <div className="task">
      <h3>
        {`${title} -
           ${totalTime}`}
      </h3>
      <button onClick={onEdit} type="button">
        edit
      </button>
      <button onClick={onDelete} type="button">
        delete
      </button>
      <button onClick={onChoose} type="button">
        odliczaj to zadanie
      </button>
    </div>
  );
};

export default memo(Task);
