import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Drinks, Meals, RecipeDetailsProps, Recipe, RecipeLocalStorage } from '../types';
import RecommendationCard from './RecommendationCard';
import style from '../style/footer.module.css';
import { fetchRecipe } from './services/Api';

function RecipeDetails({ isDrinks }: RecipeDetailsProps) {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<RecipeLocalStorage | null>(null);
  const [recommendedDrinks, setRecommendedDrinks] = useState<Drinks[]>([]);
  const [recommendedMeals, setRecommendedMeals] = useState<Meals[]>([]);
  const [recommendedRecipes, setRecommendedRecipes] = useState<Recipe[]>([]);
  const [isRecipeInProgress, setIsRecipeInProgress] = useState(true);
  const [isFavorited, setIsFavorited] = useState(false);
  const navigate = useNavigate();
  const fetchRecommendedDrinks = async () => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      const drinkData = data.drinks.map((drink: any) => ({
        id: drink.idDrink,
        imageUrl: drink.strDrinkThumb,
        name: drink.strDrink,
      }));
      setRecommendedDrinks(drinkData.slice(0, 6));
    } catch (error) {
      console.error('Error fetching recommended drinks:', error);
    }
  };
  const fetchRecommendedRecipes = async () => {
    try {
      const response = await fetch(
        isDrinks
          ? 'https://www.themealdb.com/api/json/v1/1/search.php?s='
          : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
      );
      const data = await response.json();
      const recommendedData = isDrinks ? data.meals : data.drinks;
      if (!Array.isArray(recommendedData)) {
        console.error('Recommended data is not an array:', recommendedData);
        return;
      }
      const recommended = recommendedData
        .slice(0, 6)
        .map((recip: any) => ({
          id: recip.idDrink || recip.idMeal,
          imageUrl: recip.strDrinkThumb || recip.strMealThumb,
          name: recip.strDrink || recip.strMeal,
          category: '',
          alcoholic: '',
          ingredients: [],
          instructions: '',
        }));
      setRecommendedRecipes(recommended);
    } catch (error) {
      console.error('Error fetching recommended recipes:', error);
    }
  };
  const fetchRecommendedMeals = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      console.log(data);
      const mealData = data.meals.map((meal: any) => ({
        id: meal.idMeal,
        imageUrl: meal.strMealThumb,
        name: meal.strMeal,
      }));
      setRecommendedMeals(mealData.slice(0, 6)); // Pode ajustar o número de recomendações aqui
    } catch (error) {
      console.error('Error fetching recommended meals:', error);
    }
  };
  const handleCopyLink = () => {
    const recipeUrl = isDrinks
      ? `http://localhost:3000/drinks/${id}`
      : `http://localhost:3000/meals/${id}`;
    navigator.clipboard.writeText(recipeUrl)
      .then(() => {
        const copyMessage = document.getElementById('copy-message');
        if (copyMessage) {
          copyMessage.textContent = 'Link copied!';
        }
      })
      .catch((error) => {
        console.error('Error copying link:', error);
      });
    const copyMessage = document.getElementById('copy-message');
    if (copyMessage) {
      copyMessage.textContent = '';
    }
  };
  const handleFavoriteRecipe = async () => {
    setIsFavorited(!isFavorited);
    const favoriteRecipesJSON = localStorage.getItem('favoriteRecipes');
    const favoriteRecipes = favoriteRecipesJSON
      ? JSON.parse(favoriteRecipesJSON)
      : [];
    const recipeData = {
      alcoholicOrNot: recipe?.alcoholic,
      category: recipe?.category,
      id: recipe?.id,
      image: recipe?.imageUrl,
      name: recipe?.name,
      nationality: recipe?.nationality,
      type: isDrinks ? 'drink' : 'meal',
    };
    const isAlreadyFavorited = favoriteRecipes.some(
      (favRecipe: { id: string }) => favRecipe.id === recipeData.id,
    );
    if (isAlreadyFavorited) {
      const updatedFavorites = favoriteRecipes.filter(
        (favRecipe: { id: string }) => favRecipe.id !== recipeData.id,
      );
      localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
    } else {
      localStorage.setItem(
        'favoriteRecipes',
        JSON.stringify([...favoriteRecipes, recipeData]),
      );
    }
  };
  useEffect(() => {
    const favoriteRecipesJSON = localStorage.getItem('favoriteRecipes');
    const favoriteRecipes = favoriteRecipesJSON
      ? JSON.parse(favoriteRecipesJSON)
      : [];
    const recipeId = recipe?.id;
    const isAlreadyFavorited = favoriteRecipes.some(
      (favRecipe: { id: string }) => favRecipe.id === recipeId,
    );
    setIsFavorited(isAlreadyFavorited);
  }, [recipe]);
  useEffect(() => {
    const inProgressRecipesJSON = localStorage.getItem('inProgressRecipes');
    const inProgressRecipes = inProgressRecipesJSON
      ? JSON.parse(inProgressRecipesJSON) : {};
    if (id && inProgressRecipes[id]
      !== undefined && Array.isArray(inProgressRecipes[id])) {
      setIsRecipeInProgress(true);
    } else {
      setIsRecipeInProgress(false);
    }
    fetchRecommendedDrinks();
    fetchRecommendedMeals();
    fetchRecommendedRecipes();
    if (id) {
      const fetchRecipeData = async () => {
        const fetchedRecipe = await fetchRecipe(id, isDrinks);
        if (fetchedRecipe) {
          setRecipe(fetchedRecipe);
        }
      };

      fetchRecipeData();
    } else {
      console.error('ID is undefined');
    }
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
      <h3>Recommended</h3>
      <div className="recommendation-carousel">
        {recommendedRecipes.map((recip, index) => {
          return (
            <RecommendationCard
              key={ index }
              id={ recip.id }
              name={ recip.name }
              index={ index }
              isDrinks={ !isDrinks }
            />
          );
        })}
      </div>
      <button
        data-testid="start-recipe-btn"
        className={ style.footer }
        onClick={ () => {
          const route = isDrinks ? `/drinks/${id}/in-progress`
            : `/meals/${id}/in-progress`;
          navigate(route);
        } }
      >
        Continue Recipe
      </button>
      <button
        onClick={ handleFavoriteRecipe }
      >
        <img
          data-testid="favorite-btn"
          src={ isFavorited ? '../../src/images/blackHeartIcon.svg'
            : '../../src/images/whiteHeartIcon.svg' }
          alt="Favorite"
        />
      </button>
      <button
        data-testid="share-btn"
        onClick={ () => { handleCopyLink(); } }
      >
        <img src="../../src/images/shareIcon.svg" alt="Share" />
      </button>
      <p id="copy-message" />
    </div>
  );
}
export default RecipeDetails;
