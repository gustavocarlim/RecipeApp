import React, { useState } from 'react';
import { RecipesType } from '../types';
import RecipesContext from './RecipesContext';

type FilterType = { type: string; value: string };

function RecipiesProvider({ children }: { children: React.ReactNode }) {
  const [recipes, setRecipies] = useState<RecipesType[]>([]);
  const [filter, setFilter] = useState<FilterType>({ type: '', value: '' });

  return (
    <RecipesContext.Provider value={ { recipes, setRecipies, filter, setFilter } }>
      {children}
    </RecipesContext.Provider>
  );
}

export default RecipiesProvider;
