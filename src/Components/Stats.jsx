import React from 'react';

const Stats = ({ data }) => {
    
    // const meanReadyTime = 
    // const meanServings 
    // const meanCalories
    // const meanProtein
    // const meanFat
    // const meanCarbs
   
    return (
        <div className="stats">
            <h2>Summary Statistics Across The Recipes</h2>
            <ul>
                <li>Average Max Ready Time: {meanReadyTime}</li>
                <li>Average Number of Servings: {meanServings}</li>
                <li>Average Number of Calories: {meanCalories}</li>
                <li>Average Protein: {meanProtein}</li>
                <li>Average Fat: {meanFat}</li>
                <li>Average Carbs: {meanCarbs}</li>
            </ul>
        </div>
    );
};

export default Stats;
