import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RecipeLocalStorage, RecipeDetailsProps } from '../types';
import { fetchRecipe } from './services/Api';
import Footer from './Footer';

function RecipeInProgress({ isDrinks }: RecipeDetailsProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<RecipeLocalStorage | null>(null);
  const [isFavorited, setIsFavorited] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

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
    const fetchRecipeData = async () => {
      if (!id) {
        return <p>ID não encontrado.</p>;
      }
      const fetchedRecipe = await fetchRecipe(id, isDrinks);
      if (fetchedRecipe) {
        setRecipe(fetchedRecipe);
      } else {
        navigate('/404');
      }
    };

    fetchRecipeData();
  }, [id, isDrinks, navigate]);

  // Função para lidar com a seleção/deseleção de ingredientes
  const handleIngredientToggle = (ingredientName: string) => {
    setSelectedIngredients((prevSelectedIngredients) => {
      if (prevSelectedIngredients.includes(ingredientName)) {
        return prevSelectedIngredients.filter((name) => name !== ingredientName);
      }
      return [...prevSelectedIngredients, ingredientName];
    });
  };

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 data-testid="recipe-title">{recipe.name}</h2>
      <img src={ recipe.imageUrl } alt={ recipe.name } data-testid="recipe-photo" />
      <p data-testid="recipe-category">{recipe.category}</p>
      {isDrinks && <p data-testid="recipe-alcoholic">{recipe.alcoholic}</p>}
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
            <label data-testid={ `${index}-ingredient-step` }>
              <input
                type="checkbox"
                checked={ selectedIngredients.includes(ingredient.name) }
                onChange={ () => handleIngredientToggle(ingredient.name) }
              />
              {`${ingredient.name}: ${ingredient.measure}`}
            </label>
          </li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p data-testid="instructions">{recipe.instructions}</p>
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
      <button
        data-testid="finish-recipe-btn"
      >
        finalizar
      </button>
    </div>
  );
}

export default RecipeInProgress;
