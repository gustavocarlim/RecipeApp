import { createContext } from 'react';
import { RecipiesConxtextType } from '../types';

const RecipiesContext = createContext({} as RecipiesConxtextType);
/* const RecipiesContext = createContext({} as RecipiesConxtextType | null); */
export default RecipiesContext;
