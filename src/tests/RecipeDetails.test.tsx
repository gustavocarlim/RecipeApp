import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterAll, vi } from 'vitest';
import { renderWithRouter } from './helpers/renderWithRouter';
import { detailsMock } from './mocks/detailsMock';
import App from '../App';
import RecipiesProvider from '../context/RecipiesProvider';

describe('Verifica o funcionamento correto do componente RecipeDetails', () => {
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue({
      status: 200,
      ok: true,
      json: async () => detailsMock,
    });
  });
  afterAll(() => {
    vi.clearAllMocks();
  });
  test('Verifica se os detalhes da primeira receita de comida são renderizados corretamente', async () => {
    const { meals } = detailsMock;
    const { strMeal } = meals[0];

    renderWithRouter(
      <RecipiesProvider>
        <App />
      </RecipiesProvider>,
      { initialEntries: ['/meals'] },
    );

    const loading = screen.getByText(/loading.../i);

    await waitFor(async () => {
      expect(loading).not.toBeInTheDocument();

      const cardToClick = await screen.findByTestId(/0-recipe-card/i);
      await userEvent.click(cardToClick);

      expect(cardToClick).not.toBeInTheDocument();
      expect(screen.getAllByTestId(/ingredient-name-and-measure/i)).toHaveLength(13);
    }, { timeout: 5000 });
  });
});
