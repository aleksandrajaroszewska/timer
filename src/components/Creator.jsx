/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Creator = ({
  currentTitle,
  currentTime,
  onCreate,
  onCurrentTimeChange,
  onCurrentTitleChange,
}) => {
  return (
    <div className="editor">
      <label>
        Co robisz?
        <input value={currentTitle} onChange={onCurrentTitleChange} type="text" />
      </label>
      <br />
      <label>
        Ile minut?
        <input value={currentTime} onChange={onCurrentTimeChange} type="number" />
      </label>
      <br />
      <button onClick={onCreate} type="button">
        dodaj zadanie
      </button>
    </div>
  );
};

export default Creator;
