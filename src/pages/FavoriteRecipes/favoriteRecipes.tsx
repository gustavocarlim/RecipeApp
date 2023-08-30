import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
import './style.css';

interface Recipe {
  id: number;
  image: string;
  name: string;
  nationality: string;
  category: string;
  type: string;
  alcoholicOrNot: string;
}

function FavoriteRecipes() {
  const storedFavorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');

  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>(storedFavorites);
  const [copiedRecipeId, setCopiedRecipeId] = useState<number | null>(null);
  const [currentCategory, setcurrentCategory] = useState<string>('all');
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(favoriteRecipes);

  const handleFavoriteChange = (index: number) => {
    const updatedFavorites = [...favoriteRecipes];
    updatedFavorites.splice(index, 1);

    setFavoriteRecipes(updatedFavorites);
    setFilteredRecipes(updatedFavorites);
    localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
  };

  const copyLinkToClipboard = async (recipeId: number) => {
    const link = `${window.location.origin}/meals/${recipeId}`;

    try {
      await navigator.clipboard.writeText(link);
      setCopiedRecipeId(recipeId);
      setTimeout(() => {
        setCopiedRecipeId(null);
      }, 3000);
    } catch (error) {
      window.alert(error);
    }
  };

  const handleFilterChange = (category: string) => {
    setcurrentCategory(category);
    if (category === 'all') {
      setFilteredRecipes(favoriteRecipes);
    } else {
      const filtered = favoriteRecipes.filter((recipe) => recipe.type.includes(category));
      setFilteredRecipes(filtered);
    }
  };
  console.log(filteredRecipes);

  const path = (recipe: Recipe) => {
    if (recipe.type.includes('drink')) {
      return 'drinks';
    } if (recipe.type.includes('meal')) {
      return 'meals';
    }
  };

  return (
    <>
      <Header />
      <div>
        <div>
          <h1 data-testid="page-title">Favorites</h1>
          <button
            data-testid="filter-by-all-btn"
            onClick={ () => { handleFilterChange('all'); } }
          >
            All
          </button>
          <button
            data-testid="filter-by-meal-btn"
            onClick={ () => { handleFilterChange('meals'); } }
          >
            Meals
          </button>
          <button
            data-testid="filter-by-drink-btn"
            onClick={ () => { handleFilterChange('drinks'); } }
          >
            Drinks
          </button>
          <section>
            {filteredRecipes.map((recipe, index) => (
              <div key={ recipe.id }>
                <Link to={ `/${path(recipe)}/${recipe.id}` }>
                  <img
                    className="foodImg"
                    src={ recipe.image }
                    alt={ recipe.name }
                    data-testid={ `${index}-horizontal-image` }
                  />
                  <h5 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h5>
                </Link>
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {recipe.nationality}
                  {' '}
                  -
                  {' '}
                  {recipe.category}
                  {recipe.alcoholicOrNot && (<p>{recipe.alcoholicOrNot}</p>)}
                </p>
                <button
                  onClick={ () => copyLinkToClipboard(recipe.id) }
                >
                  <img
                    data-testid={ `${index}-horizontal-share-btn` }
                    src={ shareIcon }
                    alt="share"
                  />
                  {copiedRecipeId === recipe.id && <p>Link copied!</p>}
                </button>
                <button
                  onClick={ () => handleFavoriteChange(index) }
                >
                  <img
                    data-testid={ `${index}-horizontal-favorite-btn` }
                    src={ blackHeartIcon }
                    alt="favorite"
                  />
                </button>
              </div>
            ))}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FavoriteRecipes;
