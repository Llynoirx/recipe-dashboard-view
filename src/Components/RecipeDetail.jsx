import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const RecipeDetail = () => {
    const { id } = useParams(); 
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipeDetail = async () => {
            const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=`+API_KEY);
            const data = await response.json();
            setRecipe(data);
            setLoading(false);
        };

        fetchRecipeDetail();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!recipe) return <div>No recipe found.</div>;

    return (
        <div>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
            <p>Ready In: {recipe.readyInMinutes} mins</p>
            <p>Servings: {recipe.servings}</p>
            <p>Ingredients:</p>
            <ul>
                {recipe.extendedIngredients.map(ingredient => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>
            <p>Instructions: {recipe.instructions}</p>
        </div>
    );
};

export default RecipeDetail;
