import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
    const [cuisine, setCuisine] = useState("");
    const [diet, setDiet] = useState("");
    const [intolerances, setIntolerances] = useState("");

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Cuisine (ie. Italian)"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
            />
            <input
                type="text"
                placeholder="Diet (ie. Vegetarian)"
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
            />
            <input
                type="text"
                placeholder="Intolerances (ie. Gluten)"
                value={intolerances}
                onChange={(e) => setIntolerances(e.target.value)}
            />
            <button onClick={() => {
                handleSearch(cuisine, diet, intolerances);
                setCuisine("");
                setDiet("");
                setIntolerances("");
            }}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
