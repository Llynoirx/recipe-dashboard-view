import React from 'react';
import './RecipeList.css';

const RecipeList = ({ data, hasSearched }) => {
    console.log(data);
    return (
        <div className="list-container">
            {Array.isArray(data) && data.length > 0 ? (
                data.map(item => (
                    <div key={item.id} className="list-item">
                        {/* <h3>{item.title}</h3> */}
                        <h3><Link to={`/recipe/${item.id}`}>{item.title}</Link></h3>
                        <img src={item.image} alt={item.title} />
                        <p>Ready Time: {item.readyInMinutes}mins </p>
                        <p>Number of Servings: {item.servings} </p>
                        <p>Health Score: {item.healthScore}/100 </p>
                    </div>
                ))
            ) : (hasSearched && data.length === 0 && <div>No results found</div>)}
        </div>
    );
};

export default RecipeList;