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
  strCategory: string;
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

export type MealType = {
  'idMeal': string;
  'strMeal':string;
  strCategory: CategoryType;
  'strArea': string;
  'strInstructions': string;
  'strMealThumb': string;
  'strTags': string;
  'strYoutube':string;
  'strMeasure1':string;
  'strMeasure2':string;
  'strMeasure3':string;
  'strMeasure4':string;
  'strMeasure5':string;
  'strMeasure6':string;
  'strMeasure7':string;
  'strMeasure8':string;
  'strMeasure9':string;
  'strMeasure10':string;
  'strMeasure11':string;
  'strMeasure12':string;
  'strMeasure13':string;
  'strMeasure14':string;
  'strMeasure15':string;
  'strMeasure16':string;
  'strMeasure17':string;
  'strMeasure18':string;
  'strMeasure19':string;
  'strMeasure20':string;
  'strSource':string;
};

export type DrinkType = {
  'idDrink':string;
  'strDrink':string;
  'strDrinkAlternate':string;
  'strDrinkES':string;
  'strDrinkDE':string;
  'strDrinkFR':string;
  'strDrinkZH-HANS':string;
  'strDrinkZH-HANT':string;
  'strArea': string;
  'strTags':string;
  'strVideo':string;
  'strCategory':string;
  'strIBA':string;
  'strAlcoholic':string;
  'strGlass':string;
  'strInstructions':string;
  'strInstructionsES':string;
  'strInstructionsDE':string;
  'strInstructionsFR':string;
  'strInstructionsZH-HANS':string;
  'strInstructionsZH-HANT':string;
  'strDrinkThumb':string;
  'strIngredient1':string;
  'strIngredient2':string;
  'strIngredient3':string;
  'strIngredient4':string;
  'strIngredient5':string;
  'strIngredient6':string;
  'strIngredient7':string;
  'strIngredient8':string;
  'strIngredient9':string;
  'strIngredient10':string;
  'strIngredient11':string;
  'strIngredient12':string;
  'strIngredient13':string;
  'strIngredient14':string;
  'strIngredient15':string;
  'strMeasure1':string;
  'strMeasure2':string;
  'strMeasure3':string;
  'strMeasure4':string;
  'strMeasure5':string;
  'strMeasure6':string;
  'strMeasure7':string;
  'strMeasure8':string;
  'strMeasure9':string;
  'strMeasure10':string;
  'strMeasure11':string;
  'strMeasure12':string;
  'strMeasure13':string;
  'strMeasure14':string;
  'strMeasure15':string;
  'strCreativeCommonsConfirmed':string;
  'dateModified':string;
};

export type CategoryType = {
  strCategory: string;
};
