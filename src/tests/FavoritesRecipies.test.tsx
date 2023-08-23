import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import RecipiesProvider from '../context/RecipiesProvider';
import FavoriteRecipies from '../pages/FavoriteRecipies/favoriteRecipies';

describe('Verifica o componente FavoriteRecipies', () => {
  test('Verifica se existe um título', () => {
    render(
      <MemoryRouter>
        <RecipiesProvider>
          <FavoriteRecipies />
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
          <FavoriteRecipies />
        </RecipiesProvider>
      </MemoryRouter>,
    );

    const iconProfile = screen.getByTestId('profile-top-btn');
    expect(iconProfile).toBeInTheDocument();
  });
});
