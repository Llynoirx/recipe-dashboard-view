import React, { useEffect, useState } from 'react';
import './App.css';
import RecipeList from './Components/RecipeList'; 
import SearchBar from './Components/SearchBar';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState(false);
    const [cuisine, setCuisine] = useState("");
    const [diet, setDiet] = useState("");
    const [intolerances, setIntolerances] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSearch = async (cuisine, diet, intolerances) => {
        setCuisine(cuisine);
        setDiet(diet);
        setIntolerances(intolerances);
        setSearch(true);
        setLoading(true);
    };

    // useEffect(() => {
    //     const callAPI = async () => {
    //         if (search) {
    //           const query = `https://api.spoonacular.com/recipes/complexSearch?` +
    //                         (cuisine ? `cuisine=${cuisine}` : '') +
    //                         (diet ? `diet=${diet}` : '') +
    //                         (intolerances ? `intolerances=${intolerances}` : '') +
    //                         `&number=10&apiKey=${API_KEY}`;
    //           console.log("query", query);
    //             try {
    //                 const response = await fetch(query);
    //                 const json = await response.json();
    //                 if (!json.results) {
    //                   alert("Oops! Something went wrong with that query, let's try again!");
    //                 } else if(json.results.length === 0) {
    //                   setData([]);
    //                 } else {
    //                   setData(json.results);
    //                 } 
    //             } catch (error) {
    //                 alert("An error occurred while fetching data.");
    //                 console.error(error);
    //             } finally {
    //                 setLoading(false);
    //             }
    //         }
    //     };
    //     callAPI();
    // }, [search, cuisine, diet, intolerances, API_KEY]);


    useEffect(() => {
      const callAPI = async () => {
          if (search) {
              const params = new URLSearchParams({
                  number: 10,
                  apiKey: API_KEY,
              });
  
              if (cuisine) params.append('cuisine', cuisine);
              if (diet) params.append('diet', diet);
              if (intolerances) params.append('intolerances', intolerances);
  
              const query = `https://api.spoonacular.com/recipes/complexSearch?${params.toString()}`;
              console.log("query", query);
  
              try {
                  const response = await fetch(query);
                  const json = await response.json();
                  if (!json.results) {
                      alert("Oops! Something went wrong with that query, let's try again!");
                  } else if (json.results.length === 0) {
                      setData([]);
                  } else {
                      setData(json.results);
                  }
              } catch (error) {
                  alert("An error occurred while fetching data.");
                  console.error(error);
              } finally {
                  setLoading(false);
              }
          }
      };
      callAPI();
  }, [search, cuisine, diet, intolerances, API_KEY]);
  

    return (
        <div className="app-container">
            <h1>Recipe List</h1>
            <SearchBar handleSearch={handleSearch} />
            {API_KEY ? 
            <>
              {loading ? <div>Loading...</div> : null} 
              <RecipeList data={data} hasSearched={search && !loading} /> 
            </>
            : <p>API key is not defined</p>}
        </div>
    );
}

export default App;
