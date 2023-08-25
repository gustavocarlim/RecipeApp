import { createContext } from 'react';
import { RecipesConxtextType } from '../types';

const RecipesContext = createContext({} as RecipesConxtextType);
/* const RecipiesContext = createContext({} as RecipiesConxtextType | null); */
export default RecipesContext;
