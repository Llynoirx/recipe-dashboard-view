import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
    const [cuisine, setCuisine] = useState("");

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Cuisine (ie. Italian)"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
            />
            <button onClick={() => {
                handleSearch(cuisine);
                setCuisine(""); // Clear the input after searching
            }}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
