import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './RecipeChart.css';

const RecipeChart = ({ recipeData }) => {
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <h4>{payload[0].payload.title}</h4> {/* Recipe title */}
                    <p>Health Score: {payload[0].value}</p> {/* Health score */}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="chart-container">
            <h3 className="chart-title">Recipe Health Score</h3>
            <BarChart 
                width={400} 
                height={400} 
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                data={recipeData}>
                
                <CartesianGrid strokeDasharray="5 5" />
                <YAxis tick={{ fill: 'green' }} />
                <Tooltip content={<CustomTooltip />} /> 
                <Legend />
                
                <Bar dataKey="healthScore" fill="green" />
            </BarChart>
        </div>
    );
};

export default RecipeChart;
