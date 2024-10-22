import React from 'react';

const Stats = ({ data, hasSearched }) => {
    const calcMean = (list) => {
        if (list.length === 0) return 0;
        const sum = list.reduce((acc, curr) => acc + curr, 0);
        return sum / list.length;
    };

    const readyTimesList = data.map(item => item.readyInMinutes);
    const servingsList = data.map(item => item.servings);
    const healthScoresList = data.map(item => item.healthScore);

    const meanReadyTime = calcMean(readyTimesList);
    const meanServings = calcMean(servingsList);
    const meanHealthScore = calcMean(healthScoresList);

    return (
        <div>
            {data.length > 0 ? (
            <>
                <p>Mean Ready Time: {meanReadyTime} mins</p>
                <p>Mean Servings: {meanServings}</p>
                <p>Mean Health Score: {meanHealthScore}/100</p>
                </>
            ) : (hasSearched && <p>No statistics available, no recipes found.</p>)}
        </div>
    );
};

export default Stats;
