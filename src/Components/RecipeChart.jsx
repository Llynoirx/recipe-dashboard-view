import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './RecipeChart.css';

const RecipeChart = ({ recipeData }) => {


    return (
        <div className="chart-container">
            <h3 className="chart-title">Recipe Health Score</h3>
            <LineChart 
                width={400} 
                height={400} 
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                data={recipeData}>
             
            <Line 
                type="monotone"
                dataKey="healthScore"
                stroke="#ff7300" />
              <CartesianGrid stroke="red" strokeDasharray="5 5" />
              <XAxis dataKey="title" tick={{ fill: 'white' }} />
              <YAxis tick={{ fill: 'white' }} />
              <Tooltip />
            </LineChart>
        </div>
    );
};

export default RecipeChart;
