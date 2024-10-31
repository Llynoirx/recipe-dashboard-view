import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import './RecipeDetail.css';

const API_KEY = import.meta.env.VITE_APP_API_KEY;


const RecipeDetail = () => {
    const { id } = useParams(); 
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getDetails = async () => {
            const query = `https://api.spoonacular.com/recipes/${id}/information?apiKey=`+API_KEY
            try {
                const response = await fetch(query);
                const data = await response.json();
                setRecipe(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };
        getDetails();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!recipe) return <div>No recipe found.</div>;

    return (
        <div>
            <div> <Sidebar /> </div>
            <div className="detail-container">
                <h2>{recipe.title}</h2>
                <img src={recipe.image} alt={recipe.title} />
                <p>Ready Time: {recipe.readyInMinutes}mins </p>
                <p>Number of Servings: {recipe.servings} </p>
                <p>Health Score: {recipe.healthScore}/100 </p>
                <p>Ingredients:</p>
                <ul>
                    {recipe.extendedIngredients.map((ingredient, idx) => (
                        <li key={idx}>{ingredient.original}</li>
                    ))}
                </ul>
                <p>Instructions: {recipe.instructions}</p>
            </div>
        </div>
    );
};

export default RecipeDetail;
