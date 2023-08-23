import { useState } from 'react';
import { RecipiesType } from '../types';
import RecipiesContext from './RecipesContext';

function RecipiesProvider({ children }: { children: React.ReactNode }) {
  const [recipies, setRecipies] = useState<RecipiesType[]>([]);

  return (
    <RecipiesContext.Provider value={ { recipies, setRecipies } }>
      {children}
    </RecipiesContext.Provider>
  );
}

export default RecipiesProvider;
