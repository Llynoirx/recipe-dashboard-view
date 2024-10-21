import React from 'react';
import './RecipeList.css';

const RecipeList = ({ data, hasSearched }) => {
    return (
        <div className="list-container">
            {Array.isArray(data) && data.length > 0 ? (
                data.map(item => (
                    <div key={item.id} className="list-item">
                        <h3>{item.title}</h3>
                        <img src={item.image} alt={item.title} />
                    </div>
                ))
            ) : (hasSearched && data.length === 0 && <div>No results found.</div>)}
        </div>
    );
};

export default RecipeList;