import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import { mockMeals } from './mocks/mockMeals';
import { renderWithRouter } from './helpers/renderWithRouter';
import RecipeDetails from '../Components/RecipeDetails';

describe('Verifica o funcionamento correto do componente RecipeDetails', () => {
  beforeEach(async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => mockMeals,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('Verifica se os detalhes da primeira receita de comida são renderizados corretamente', async () => {
    const { meals } = mockMeals;
    const { strMeal } = meals[0];

    renderWithRouter(<RecipeDetails
      isDrinks={ false }
    />, { initialEntries: ['/meals'] });

    expect(global.fetch).toBeCalledTimes(1);

    const recipeName = await screen.findByRole('heading', { name: strMeal });
    expect(recipeName).toBeInTheDocument();
  });
});
