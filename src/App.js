/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './App.css';
import Editor from './components/Editor';
import Timer from './components/Timer';

function App() {
  return (
    <div className="main-wrapper">
      <Editor />
      <Timer />
    </div>
  );
}

export default App;
