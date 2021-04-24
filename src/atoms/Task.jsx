/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { memo } from 'react';

const Task = ({
  title,
  totalTime,
  onDelete,
  onChoose,
  onTitleChange,
  onTimeChange,
  inactive,
  onEdit,
}) => {
  // if (totalTime <= 0) {
  //   throw new Error('całkowity czas musi być wiekszy ni zero');
  // }
  return (
    <div className="task">
      <h3>
        {`${title} -
           ${totalTime}`}
      </h3>
      <label>
        Co robisz?
        <input value={title} onChange={onTitleChange} type="text" disabled={inactive} />
      </label>
      <label>
        Ile minut?
        <input value={totalTime} onChange={onTimeChange} type="number" disabled={inactive} />
      </label>
      <button onClick={onDelete} type="button">
        delete
      </button>
      <button onClick={onChoose} type="button">
        odliczaj to zadanie
      </button>
      <button onClick={onEdit} type="button" disabled={!inactive}>
        edytuj to zadanie
      </button>
    </div>
  );
};

export default memo(Task);
