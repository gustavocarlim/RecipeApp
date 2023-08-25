import { useState } from 'react';
import { RecipesType } from '../types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }: { children: React.ReactNode }) {
  const [recipes, setRecipes] = useState<RecipesType[]>([]);

  return (
    <RecipesContext.Provider value={ { recipes, setRecipes } }>
      {children}
    </RecipesContext.Provider>
  );
}

export default RecipesProvider;
