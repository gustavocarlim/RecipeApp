import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import RecipiesProvider from '../context/RecipiesProvider';
import DoneRecipes from '../pages/DoneRecipes/doneRecipies';

describe('Verifica o componente DoneRecipies', () => {
  test('Verifica se existe um título', () => {
    render(
      <MemoryRouter>
        <RecipiesProvider>
          <DoneRecipes />
        </RecipiesProvider>
      </MemoryRouter>,
    );

    const title = screen.getByTestId('page-title');
    expect(title).toBeInTheDocument();
  });

  test('verifica se existe um ícone de perfil', () => {
    render(
      <MemoryRouter>
        <RecipiesProvider>
          <DoneRecipes />
        </RecipiesProvider>
      </MemoryRouter>,
    );

    const iconProfile = screen.getByTestId('profile-top-btn');
    expect(iconProfile).toBeInTheDocument();
  });
});
