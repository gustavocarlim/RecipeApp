import { RecipeLocalStorage } from '../../types';

export const fetchIngredients = async (ingredient: string) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();

  if (!data.meals || data.meals.length === 0) {
    window.alert('No recipes found for this ingredient.');
  }

  return data;
};

export const fetchName = async (name: string) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
  const data = await response.json();

  if (!data.meals || data.meals.length === 0) {
    window.alert("Sorry, we haven't found any recipes for these filters.");
    return { meals: [] };
  }

  return data;
};

export const fetchfirstLetter = async (firstLetter: string) => {
  if (firstLetter.length !== 1 || firstLetter === '0') {
    window.alert('Your search must have only 1 (one) character');
    return { meals: [] };
  }

  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
  const data = await response.json();

  if (!data.meals || data.meals.length === 0) {
    alert('No recipes found for this first letter.');
  }

  return data;
};

export async function fetchRecipe(id: string, isDrinks: boolean):
Promise<RecipeLocalStorage | null> {
  if (!id) {
    console.error('ID is undefined or null');
    return null;
  }
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

    const recipe: RecipeLocalStorage = {
      id: recipeData.idMeal || recipeData.idDrink,
      name: recipeData.strMeal || recipeData.strDrink,
      imageUrl: recipeData.strMealThumb || recipeData.strDrinkThumb,
      category: recipeData.strCategory || '',
      alcoholic: recipeData.strAlcoholic || '',
      ingredients: [],
      instructions: recipeData.strInstructions,
      videoUrl: recipeData.strYoutube,
      nationality: recipeData.strArea || '',
    };

    const ingredients: Array<{ name: string; measure: string }> = [];
    for (let i = 1; i <= 20; i++) {
      if (recipeData[`strIngredient${i}`]) {
        ingredients.push({
          name: recipeData[`strIngredient${i}`],
          measure: recipeData[`strMeasure${i}`],
        });
      }
    }

    recipe.ingredients = ingredients;

    return recipe;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    return null;
  }
}
