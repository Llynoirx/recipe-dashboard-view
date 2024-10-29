import React from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

const RecipeChart = ({ meanHealthScore }) => {
    const statsData = [
        { name: 'Health Score', value: meanHealthScore, fill: '#82ca9d' },
    ];

    return (
        <div>
            <h3>Recipe Health Score</h3>
            <RadialBarChart
                width={400}
                height={300}
                cx={200}
                cy={150}
                innerRadius={20}
                outerRadius={140}
                barSize={10}
                data={statsData}
            >
                <RadialBar
                    minAngle={15}
                    label={{ position: 'insideStart', fill: '#fff' }}
                    background
                    clockWise
                    dataKey="value"
                />
                <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={{ top: 0, left: 350 }} />
            </RadialBarChart>
        </div>
    );
};

export default RecipeChart;
