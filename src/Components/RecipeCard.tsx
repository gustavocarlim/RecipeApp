import React from 'react';
import { Link } from 'react-router-dom';

interface RecipeCardProps {
  id: string;
  index: number;
  imageUrl: string;
  name: string;
  isDrinks: boolean; // Nova propriedade para verificar se é uma receita de drinks
}

function RecipeCard({ id, index, imageUrl, name, isDrinks }: RecipeCardProps) {
  const basePath = isDrinks ? '/drinks' : '/meals'; // Determinar o caminho base com base em isDrinks

  return (
    <Link to={ `${basePath}/${id}` }>
      <div data-testid={ `${index}-recipe-card` }>
        <img src={ imageUrl } alt={ name } data-testid={ `${index}-card-img` } />
        <p data-testid={ `${index}-card-name` }>{name}</p>
      </div>
    </Link>
  );
}

export default RecipeCard;
