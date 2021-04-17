/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Editor = ({
  title,
  totalTime,
  handleTitleChange,
  handleTimeChange,
  isEditable,
  handleConfirm,
}) => {
  return (
    <div className="editor">
      <label>
        Co robisz?
        <input onChange={handleTitleChange} value={title} type="text" disabled={!isEditable} />
      </label>
      <br />
      <label>
        Ile minut?
        <input onChange={handleTimeChange} value={totalTime} disabled={!isEditable} type="number" />
      </label>
      <br />
      <button onClick={handleConfirm} type="button">
        {isEditable ? 'zatwierdź' : 'edytuj'}
      </button>
    </div>
  );
};

export default Editor;
