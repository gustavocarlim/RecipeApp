import { useState } from 'react';
import { RecipiesType } from '../types';
import RecipiesContext from './RecipesContext';

function RecipiesProvider({ children }: { children: React.ReactNode }) {
  const [recipies, setRecipies] = useState<RecipiesType[]>([]);
  const [filter, setFilter] = useState('');

  return (
    <RecipiesContext.Provider value={ { recipies, setRecipies, filter, setFilter } }>
      {children}
    </RecipiesContext.Provider>
  );
}

export default RecipiesProvider;
