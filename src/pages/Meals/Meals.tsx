import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import RecipeCard from '../../Components/RecipeCard';

interface Recipe {
  id: string;
  imageUrl: string;
  name: string;
}

function Meals() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const fetchRecipes = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    const recipeData = data.meals.map((meal: any) => ({
      id: meal.idMeal,
      imageUrl: meal.strMealThumb,
      name: meal.strMeal,
    }));
    setRecipes(recipeData);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const recipesToRender = recipes.slice(0, 12);

  return (
    <div>
      <Header />
      {recipesToRender.map((recipe, index) => (
        <RecipeCard
          key={ recipe.id }
          index={ index }
          imageUrl={ recipe.imageUrl }
          name={ recipe.name }
        />
      ))}
    </div>
  );
}

export default Meals;
