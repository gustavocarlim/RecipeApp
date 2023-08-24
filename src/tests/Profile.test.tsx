import { screen } from '@testing-library/react';
import Profile from '../pages/Profile/Profile';
import { renderWithRouter } from './helpers/renderWithRouter';

describe('Verifica o componente Profile', () => {
  test('Verifica se existe um título', () => {
    renderWithRouter(<Profile />, { initialEntries: ['/'] });

    const title = screen.getByTestId('page-title');
    expect(title).toBeInTheDocument();
  });

  test('verifica se existe um ícone de perfil', () => {
    renderWithRouter(<Profile />, { initialEntries: ['/'] });

    const iconProfile = screen.getByTestId('profile-top-btn');
    expect(iconProfile).toBeInTheDocument();
  });
});
