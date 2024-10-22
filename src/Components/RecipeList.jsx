import React from 'react';
import './RecipeList.css';

const RecipeList = ({ data, hasSearched }) => {
    console.log(data);
    return (
        <div className="list-container">
            {Array.isArray(data) && data.length > 0 ? (
                data.map(item => (
                    <div key={item.id} className="list-item">
                        <h3>{item.title}</h3>
                        <img src={item.image} alt={item.title} />
                        <p>Max Ready Time: {item.maxReadyTime} </p>
                        <p>Number of Servings: {item.minServings}-{item.maxServings} </p>
                        <p>Number of Calories: {item.minCalories}-{item.maxCalories} </p>
                        <p>Protein: {item.minProtein}-{item.maxProtein} </p>
                        <p>Fat: {item.minFat}-{item.maxFat} </p>
                        <p>Carbs: {item.minCarbs}-{item.maxCarbs} </p>
                    </div>
                ))
            ) : (hasSearched && data.length === 0 && <div>No results found</div>)}
        </div>
    );
};

export default RecipeList;