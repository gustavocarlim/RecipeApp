import { createContext } from 'react';
import { RecipesConxtextType } from '../types';

const RecipesContext = createContext({} as RecipesConxtextType);

export default RecipesContext;
