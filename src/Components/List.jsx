import React, { useEffect, useState } from 'react';
import './List.css';

const List = ({API_KEY}) => {
    const [data, setData] = useState([]);
    const [cuisine, setCuisine] = useState("");
    const [search, setSearch] = useState(false); 

    useEffect(() => {
        const callAPI = async () => {
            console.log({API_KEY})
            if (search && cuisine) {
                const query = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&number=10&apiKey=${API_KEY}`;
                try {
                    const response = await fetch(query);
                    const json = await response.json();
                    if (!json.results) alert("Oops! Something went wrong with that query, let's try again!");
                    else setData(json.results);
                } catch (error) {
                    alert("An error occurred while fetching data.");
                    console.error(error);
                } finally {
                    setSearch(false); 
                }
            }
        };
        callAPI();
    }, [search, cuisine, API_KEY]); 

    const handleSearch = () => {
        setSearch(true); 
    };

    return (
        <div className="list-container">
            <input 
                type="text" 
                placeholder="Cuisine (ie. Italian)" 
                value={cuisine} 
                onChange={(e) => setCuisine(e.target.value)} 
            />
            <button onClick={handleSearch}>Search</button>

            {Array.isArray(data) && (data.length>0) ? (
                data.map(item => (
                    <div key={item.id} className="list-item">
                        <h3>{item.title}</h3>
                        <img src={item.image} alt={item.title} />
                    </div>
                ))
            ) : (<div>No results found.</div>)}
        </div>
    );
};

export default List;
