import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface RecipeDetailsProps {
  isDrinks: boolean;
}

interface Recipe {
  id: string;
  name: string;
  imageUrl: string;
  category: string;
  alcoholic: string;
  ingredients: Array<{ name: string; measure: string }>;
  instructions: string;
  videoUrl?: string;
}

function RecipeDetails({ isDrinks }: RecipeDetailsProps) {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  const fetchRecipe = async () => {
    try {
      const response = await fetch(
        isDrinks
          ? `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
          : `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const recipeData = isDrinks ? data.drinks[0] : data.meals[0];
      setRecipe({
        id: recipeData.idMeal || recipeData.idDrink,
        name: recipeData.strMeal || recipeData.strDrink,
        imageUrl: recipeData.strMealThumb || recipeData.strDrinkThumb,
        category: recipeData.strCategory || '',
        alcoholic: recipeData.strAlcoholic || '',
        ingredients: [],
        instructions: recipeData.strInstructions,
        videoUrl: recipeData.strYoutube,
      });

      const ingredients: Array<{ name: string; measure: string }> = [];
      for (let i = 1; i <= 20; i++) {
        if (recipeData[`strIngredient${i}`]) {
          ingredients.push({
            name: recipeData[`strIngredient${i}`],
            measure: recipeData[`strMeasure${i}`],
          });
        }
      }
      setRecipe((prevRecipe) => ({
        ...prevRecipe!,
        ingredients,
      }));
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, [id, isDrinks]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 data-testid="recipe-title">{recipe.name}</h2>
      <img src={ recipe.imageUrl } alt={ recipe.name } data-testid="recipe-photo" />
      <p data-testid="recipe-category">{recipe.category}</p>
      <p data-testid="recipe-category">{recipe.alcoholic}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
            {`${ingredient.name}: ${ingredient.measure}`}
          </li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p data-testid="instructions">{recipe.instructions}</p>
      {recipe.videoUrl && !isDrinks && (
        <div>
          <h3>Video:</h3>
          <iframe
            width="560"
            height="315"
            src={ `https://www.youtube.com/embed/${recipe.videoUrl}` }
            title={ `${recipe.name} Video` }
            data-testid="video"
          />
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;
