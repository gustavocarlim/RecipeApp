import { render, screen } from '@testing-library/react';
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

  test('verifica se o botão Done Recipes redireciona para a rota correta', () => {
    const email = 'test@gmail.com';
    localStorage.setItem('user', JSON.stringify({ email }));

    // Act
    render(<Profile />);

    // Assert
    const emailElement = screen.getByTestId('profile-email');
    expect(emailElement).toHaveTextContent(email);
  });
});
