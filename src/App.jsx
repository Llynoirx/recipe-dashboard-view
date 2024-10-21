import React, { useState, useEffect } from 'react';
import './App.css'

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {


  const callAPI = async () => {
    const query = `https://api.spoonacular.com/recipes/complexSearch&api_key=${API_KEY}`
    try{
      const response = await fetch(query);
      const json = await response.json();
      if (json == null) {
        alert("Oops! Something went wrong with that query, let's try again!")
      } else {
        callAPI(); 
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }


  return (
      <div>
       
      </div>
  )
}

export default App
