import { useState } from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';

interface Recipe {
  imageUrl: string;
  name: string;
  nacionality: string;
  category: string;
}

function FavoriteRecipes() {
  const storedFavorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');

  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>(storedFavorites);
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const handleFavoriteChange = (index: number) => {
    const updatedFavorites = [...favoriteRecipes];
    updatedFavorites.splice(index, 1);

    setFavoriteRecipes(updatedFavorites);
    localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
  };

  const copyLinkToClipboard = async () => {
    const link = window.location.href;

    try {
      await navigator.clipboard.writeText(link);
      setIsLinkCopied(true);
      setTimeout(() => {
        setIsLinkCopied(false);
      }, 3000);
    } catch (error) {
      console.error('Error copying link to clipboard:', error);
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
              <div key={ index }>
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
                  onClick={ copyLinkToClipboard }
                >
                  <img
                    src={ shareIcon }
                    alt="share"
                  />
                  {isLinkCopied && <p>Link copied!</p>}
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
