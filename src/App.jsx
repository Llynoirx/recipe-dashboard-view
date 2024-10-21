import React, { useState, useEffect } from 'react';
import './App.css'
import List from './Components/List';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  

  return (
    <div className="app-container">
      <h1>Recipe List</h1>
      {API_KEY ? <List API_KEY={API_KEY} /> : <p>API key is not defined.</p>}
    </div>
  )
}

export default App
