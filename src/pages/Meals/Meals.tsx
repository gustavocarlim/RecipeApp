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
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchCategories = async () => {
    let url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

    if (selectedCategory) {
      url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    }

    const response = await fetch(url);
    const data = await response.json();

    if (data.meals) {
      const categoryData = data.meals.map((category: any) => category.strCategory);
      setCategories(categoryData.slice(0, 5));
    }
  };

  const fetchRecipesByCategory = async (category: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const recipeData = data.meals.map((meal: any) => ({
        id: meal.idMeal,
        imageUrl: meal.strMealThumb,
        name: meal.strMeal,
      }));
      setRecipes(recipeData);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setIsLoading(false);
    }
  };

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
    fetchCategories();
    if (selectedCategory) {
      fetchRecipesByCategory(selectedCategory);
    } else {
      fetchRecipes();
    }
  }, [selectedCategory]);

  const handleCategoryFilter = (category: string) => {
    if (category === selectedCategory) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
      fetchRecipesByCategory(category);
    }
  };

  const handleClearFilters = () => {
    setSelectedCategory(null);
  };

  const recipesToRender = recipes.slice(0, 12);

  return (
    <div>
      <Header />
      {categories.map((category, index) => (
        <button
          key={ index }
          onClick={ () => handleCategoryFilter(category) }
          data-testid={ `${category}-category-filter` }
        >
          {category}
        </button>
      ))}
      <button onClick={ handleClearFilters } data-testid="All-category-filter">
        Clear Filters
      </button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        recipesToRender.map((recipe, index) => (
          <RecipeCard
            key={ recipe.id }
            id={ recipe.id }
            index={ index }
            imageUrl={ recipe.imageUrl }
            name={ recipe.name }
            data-testid="recipe-card"
            isDrinks={ false }
          />
        ))
      )}
    </div>
  );
}

export default Meals;
