import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';

function FavoriteRecipes() {
  localStorage.getItem()
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
            <img
              src={ imageUrl }
              alt={ name }
              data-testid={ `${id}-horizontal-image` }
            />
            <h5
              data-testid={ `${id}-horizontal-name` }
            >
              {name}
            </h5>
            <p
              data-testid={ `${id}-horizontal-top-text` }
            >
              Categoria
            </p>
            <button
              data-testid={ `${id}-horizontal-share-btn` }
            >
              {shareIcon}
            </button>
            <button
              data-testid={ `${id}-horizontal-favorite-btn` }
            >
              {blackHeartIcon}
            </button>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FavoriteRecipes;
