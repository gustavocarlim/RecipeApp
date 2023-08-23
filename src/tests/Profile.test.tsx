import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Profile from '../pages/Profile/Profile';
import RecipiesProvider from '../context/RecipiesProvider';

describe('Verifica o componente Profile', () => {
  test('Verifica se existe um título', () => {
    render(
      <MemoryRouter>
        <RecipiesProvider>
          <Profile />
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
          <Profile />
        </RecipiesProvider>
      </MemoryRouter>,
    );

    const iconProfile = screen.getByTestId('profile-top-btn');
    expect(iconProfile).toBeInTheDocument();
  });
});
