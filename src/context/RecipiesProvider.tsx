import { useState } from 'react';
import { RecipesType } from '../types';
import RecipiesContext from './RecipesContext';

function RecipiesProvider({ children }: { children: React.ReactNode }) {
  const [recipies, setRecipies] = useState<RecipesType[]>([]);
  const [filter, setFilter] = useState('');

  return (
    <RecipiesContext.Provider value={ { recipies, setRecipies, filter, setFilter } }>
      {children}
    </RecipiesContext.Provider>
  );
}

export default RecipiesProvider;
