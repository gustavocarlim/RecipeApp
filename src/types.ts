export type RecipesConxtextType = {
  user?: User | null;
  recipes: RecipesType[];
  setRecipies: React.Dispatch<React.SetStateAction<RecipesType[]>>;
  filter: { type: string; value: string }; // Adjust the type here
  setFilter: React.Dispatch<React.SetStateAction<{ type: string; value: string }>>; // Adjust the type here
};

export type User = {
  id: number;
  email: string;
  password: string;
};

export type Meals = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export type Drinks = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

export type RecipesType = {
  meals: Meals[];
  drinks: Drinks[];
};

export interface RecipeDetailsProps {
  isDrinks: boolean;
}

export interface Recipe {
  id: string;
  name: string;
  imageUrl: string;
  category: string;
  alcoholic: string;
  ingredients: Array<{ name: string; measure: string }>;
  instructions: string;
  videoUrl?: string;
}

export interface RecipeLocalStorage {
  id: string;
  name: string;
  imageUrl: string;
  category: string;
  alcoholic: string;
  ingredients: Array<{ name: string; measure: string }>;
  instructions: string;
  videoUrl?: string;
  nationality: string;
}

export type DoneRecipesType = {
  id: string,
  type: string,
  nationality: string,
  category: string,
  alcoholicOrNot: string,
  name: string,
  image: string,
  doneDate: string,
  tags: string[],
};
