/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { memo } from 'react';

const Editor = () => (
  <div className="editor inactive">
    <label>
      Co robisz? <input disabled value="Uczę się skrótów klawiszowych" type="text" />
    </label>
    <br />
    <label>
      Ile minut? <input disabled value="25" type="number" />
    </label>
    <br />
    <button type="button" disabled>
      Zacznij
    </button>
  </div>
);

export default memo(Editor);
