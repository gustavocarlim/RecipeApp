import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import { DoneRecipesType } from '../types';
import styles from '../style/doneRecipe.module.css';

function DoneRecipesCard() {
  const [doneRecipes, setDoneRecipes] = useState<DoneRecipesType[]>([]);
  const [copiedLink, setClipboardText] = useState<string | undefined>();
  const [filter, setFilter] = useState<'all' | 'meal' | 'drink'>('all');

  useEffect(() => {
    const savedStorageDoneRecipes = localStorage.getItem('doneRecipes');
    if (savedStorageDoneRecipes !== null) {
      setDoneRecipes(JSON.parse(savedStorageDoneRecipes));
    }
  }, []);

  const handleFilterClick = (selectedFilter: 'all' | 'meal' | 'drink') => {
    setFilter(selectedFilter);
  };

  const filterDoneRecipes = filter === 'all'
    ? doneRecipes
    : doneRecipes.filter((recipe) => recipe.type === filter);

  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => handleFilterClick('all') }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-meal-btn"
        onClick={ () => handleFilterClick('meal') }
      >
        Meals
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => handleFilterClick('drink') }
      >
        Drinks
      </button>

      {filterDoneRecipes.length > 0
        && filterDoneRecipes.map((recipe, index) => (
          <div key={ recipe.id } className={ styles.recipeCard }>
            <Link
              to={ recipe.type === 'meal'
                ? `/meals/${recipe.id}`
                : `/drinks/${recipe.id}` }
            >
              <img
                className="img-thumbnail"
                src={ recipe.image }
                alt={ `${recipe.name} Recipe` }
                data-testid={ `${index}-horizontal-image` }
              />
            </Link>

            <p data-testid={ `${index}-horizontal-top-text` }>
              {`${recipe.nationality} - ${recipe.category}`}
              {' '}
              {recipe.alcoholicOrNot}
            </p>

            <Link
              to={ recipe.type === 'meal'
                ? `/meals/${recipe.id}`
                : `/drinks/${recipe.id}` }
            >
              <p data-testid={ `${index}-horizontal-name` }>
                {recipe.name}
              </p>
            </Link>
            <p data-testid={ `${index}-horizontal-done-date` }>
              Done in:
              {' '}
              {recipe.doneDate}
            </p>

            <button
              type="button"
              onClick={ () => {
                const url = window.location.href.replace(
                  '/done-recipes',
                  recipe.type === 'meal'
                    ? `/meals/${recipe.id}`
                    : `/drinks/${recipe.id}`,
                );
                setClipboardText(url);
                navigator.clipboard.writeText(url);
              } }
            >
              <img
                src={ shareIcon }
                alt="Share"
                data-testid={ `${index}-horizontal-share-btn` }
              />
            </button>
            {copiedLink && (
              <Alert
                variant="info"
                dismissible
                onClose={ () => setClipboardText(undefined) }
              >
                <Alert.Heading>Link copied!</Alert.Heading>
              </Alert>
            )}
            {recipe.tags.map((tag, indexTag) => (
              <p
                key={ indexTag }
                data-testid={ `${index}-${tag}-horizontal-tag` }
              >
                {tag}
              </p>
            ))}
          </div>
        ))}
    </div>
  );
}

export default DoneRecipesCard;
