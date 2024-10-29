import React, { useEffect, useState } from 'react';
import './App.css';
import RecipeList from './Components/RecipeList'; 
import SearchBar from './Components/SearchBar';
import Stats from './Components/Stats';
import RecipeChart from './Components/RecipeChart';

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

    const makeQuery = (cuisine, diet, intolerances, API_KEY) => {
      const params = new URLSearchParams({
          number: 10,
          apiKey: API_KEY,
      });
  
      if (cuisine) params.append('cuisine', cuisine);
      if (diet) params.append('diet', diet);
      if (intolerances) params.append('intolerances', intolerances);
  
      return `https://api.spoonacular.com/recipes/complexSearch?${params.toString()}`;
  };

    useEffect(() => {
      const callAPI = async () => {
          if (search) {
              const query = makeQuery(cuisine, diet, intolerances, API_KEY);
              try {
                  const response = await fetch(query);
                  const json = await response.json();
                  if (!json.results) {
                      alert("Oops! Something went wrong with that query, let's try again!");
                  } else if (json.results.length === 0) {
                      setData([]);
                  } else {
                      const recipeDetails = await Promise.all(
                        json.results.map(async (item) => {
                            const detailResponse = await fetch(`https://api.spoonacular.com/recipes/${item.id}/information?apiKey=${API_KEY}`);
                            return await detailResponse.json();
                        })
                      );
                      setData(recipeDetails);
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
              <Stats data={data} hasSearched={search && !loading}  />
              <RecipeList data={data} hasSearched={search && !loading} /> 
            </>
            : <p>API key is not defined</p>}
        </div>
    );
}

export default App;
