import { createContext } from 'react';
import { RecipesConxtextType } from '../types';

const RecipesContext = createContext({} as RecipesConxtextType | null);

export default RecipesContext;
