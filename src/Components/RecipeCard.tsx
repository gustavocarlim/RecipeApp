import React from 'react';

interface RecipeCardProps {
  index: number;
  imageUrl: string;
  name: string;
}

function RecipeCard({ index, imageUrl, name }: RecipeCardProps) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img src={ imageUrl } alt={ name } data-testid={ `${index}-card-img` } />
      <p data-testid={ `${index}-card-name` }>{name}</p>
    </div>
  );
}

export default RecipeCard;
