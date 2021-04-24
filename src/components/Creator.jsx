/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Creator = ({
  currentTitle,
  currentTime,
  onCreate,
  onCurrentTimeChange,
  onCurrentTitleChange,
  inactive,
  onEdit,
}) => {
  return (
    <div className="editor">
      <label className={inactive ? ' inactive' : ''}>
        Co robisz?
        <input
          value={currentTitle}
          onChange={onCurrentTitleChange}
          disabled={inactive}
          type="text"
        />
      </label>

      <label className={inactive ? ' inactive' : ''}>
        Ile sekund?
        <input
          value={currentTime}
          onChange={onCurrentTimeChange}
          type="number"
          disabled={inactive}
        />
      </label>

      <button onClick={onCreate} type="button" disabled={inactive}>
        dodaj zadanie
      </button>
      <button onClick={onEdit} type="button" disabled={!inactive}>
        edytuj
      </button>
    </div>
  );
};

export default Creator;
