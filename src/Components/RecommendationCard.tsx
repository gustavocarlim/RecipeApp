import React from 'react';
import { Link } from 'react-router-dom';

interface RecommendationCardProps {
  id: string;
  name: string;
  index: number;
  isDrinks: boolean;
}

function RecommendationCard({ id, name, index, isDrinks }: RecommendationCardProps) {
  const basePath = isDrinks ? '/drinks' : '/meals';

  const cardStyle: React.CSSProperties = {
    display: index === 2 || index === 3 || index === 4 || index === 5 ? 'none' : 'block',
  };

  return (
    <Link to={ `${basePath}/${id}` }>
      <div
        data-testid={ `${index}-recommendation-card` }
        style={ cardStyle }
        key={ index }
      >
        <div data-testid={ `${index}-recommendation-title` }>{name}</div>
      </div>
    </Link>
  );
}

export default RecommendationCard;
