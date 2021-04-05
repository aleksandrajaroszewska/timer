/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './App.css';
import Timer from './components/Timer';
import Editor from './components/Editor';

function App() {
  return (
    <div className="main-wrapper">
      <Editor />
      <Timer />
    </div>
  );
}

export default App;
