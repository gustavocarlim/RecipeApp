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
