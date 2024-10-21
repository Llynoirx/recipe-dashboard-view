import React, { useState, useEffect } from 'react';
import './App.css'
import List from './Components/List';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {

  return (
    <div>
      <h1>Recipe List</h1>
      <List API_KEY={API_KEY} />
    </div>
  )
}

export default App
