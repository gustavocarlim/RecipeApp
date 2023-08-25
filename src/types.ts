export type RecipesConxtextType = {
  user?: User | null;
  recipes: RecipesType[];
  setRecipies: React.Dispatch<React.SetStateAction<RecipesType[]>>;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;

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
