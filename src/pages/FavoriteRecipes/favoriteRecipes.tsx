import React, { useState } from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';

interface Recipe {
  id: number;
  imageUrl: string;
  name: string;
  nacionality: string;
  category: string;
}

function FavoriteRecipes() {
  const storedFavorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');

  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>(storedFavorites);
  const [copiedRecipeId, setCopiedRecipeId] = useState<number | null>(null);

  const handleFavoriteChange = (index: number) => {
    const updatedFavorites = [...favoriteRecipes];
    updatedFavorites.splice(index, 1);

    setFavoriteRecipes(updatedFavorites);
    localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
  };

  const copyLinkToClipboard = async (recipeId: number) => {
    const link = `${window.location.origin}/meals/${recipeId}`; // Assuming the link structure

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

  return (
    <>
      <Header />
      <div>
        <div>
          <h1 data-testid="page-title">Favorites</h1>
          <button
            data-testid="filter-by-all-btn"
          >
            All
          </button>
          <button
            data-testid="filter-by-meal-btn"
          >
            Meals
          </button>
          <button
            data-testid="filter-by-drink-btn"
          >
            Drinks
          </button>
          <section>
            {favoriteRecipes.map((recipe, index) => (
              <div key={ recipe.id }>
                <img
                  src={ recipe.imageUrl }
                  alt={ recipe.name }
                  data-testid={ `${index}-horizontal-image` }
                />
                <h5
                  data-testid={ `${index}-horizontal-name` }
                >
                  {recipe.name}
                </h5>
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {recipe.nacionality}
                  ,
                  {' '}
                  {recipe.category}
                </p>
                <button
                  data-testid={ `${index}-horizontal-share-btn` }
                  onClick={ () => copyLinkToClipboard(recipe.id) }
                >
                  <img
                    src={ shareIcon }
                    alt="share"
                  />
                  {copiedRecipeId === recipe.id && <p>Link copied!</p>}
                </button>
                <button
                  data-testid={ `${index}-horizontal-favorite-btn` }
                  onClick={ () => handleFavoriteChange(index) }
                >
                  <img src={ blackHeartIcon } alt="favorite" />
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
