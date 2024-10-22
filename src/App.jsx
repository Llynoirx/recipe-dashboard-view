import React, { useEffect, useState } from 'react';
import './App.css';
import RecipeList from './Components/RecipeList'; 
import SearchBar from './Components/SearchBar';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState(false);
    const [cuisine, setCuisine] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSearch = async (cuisine) => {
        setCuisine(cuisine);
        setSearch(true);
        setLoading(true);
    };

    useEffect(() => {
        const callAPI = async () => {
            if (search && cuisine) {
                const query = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&number=10&apiKey=${API_KEY}`;
                try {
                    const response = await fetch(query);
                    const json = await response.json();
                    if (!json.results) {
                      alert("Oops! Something went wrong with that query, let's try again!");
                    } else if(json.results.length === 0) {
                      setData([]);
                    } else {
                      setData(json.results);
                    } 
                } catch (error) {
                    alert("An error occurred while fetching data.");
                    console.error(error);
                } finally {
                    setLoading(false);
                    // setSearch(false);
                }
            }
        };
        callAPI();
    }, [search, cuisine, API_KEY]);

    return (
        <div className="app-container">
            <h1>Recipe List</h1>
            <SearchBar handleSearch={handleSearch} />
            {API_KEY ? 
            <>
              {loading ? <div>Loading...</div> : null} 
              <RecipeList data={data} hasSearched={search && !loading} /> 
            </>
            : <p>API key is not defined.</p>}
        </div>
    );
}

export default App;
