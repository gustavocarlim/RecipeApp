export type RecipiesConxtextType = {
  user?: User | null;
  recipies: RecipiesType[];
  setRecipies: React.Dispatch<React.SetStateAction<RecipiesType[]>>;
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

export type RecipiesType = {
  meals: Meals[];
  drinks: Drinks[];
};
