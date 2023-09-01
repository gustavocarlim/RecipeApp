import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';
import Header from '../Components/Header';
import { renderWithRouter } from './helpers/renderWithRouter';

const profileIcon = 'profile-top-btn';

describe('Verifica o componente <Header />', () => {
  /* test('Verifica se existe um título', () => {
    renderWithRouter(<Header />, { initialEntries: ['/'] });

    const title = screen.getByTestId('page-title');
    expect(title).toBeInTheDocument();
  });
 */
  test('Verifica se existe um ícone de perfil', () => {
    renderWithRouter(<Header />, { initialEntries: ['/'] });

    const iconProfile = screen.getByTestId(profileIcon);
    expect(iconProfile).toBeInTheDocument();
  });

  test('Verifica se existe um ícone de pesquisa', () => {
    renderWithRouter(<Header />, { initialEntries: ['/'] });

    const iconSearch = screen.getByTestId('search-top-btn');
    expect(iconSearch).toBeInTheDocument();
  });

  test('Verifica se a entrada de pesquisa é alternada ao clicar no botão de pesquisa', async () => {
    renderWithRouter(<Header />, { initialEntries: ['/'] });

    const searchInput = screen.queryByTestId('search-input');
    const buttonSearch = screen.getByTestId('search-top-btn');

    expect(searchInput).not.toBeInTheDocument();

    await userEvent.click(buttonSearch);
    expect(buttonSearch).toBeInTheDocument();

    await userEvent.click(buttonSearch);
    expect(searchInput).not.toBeInTheDocument();
  });

  test('Verifica redirecionamento ao clicar no ícone de perfil', async () => {
    renderWithRouter(<Header />, { initialEntries: ['/profile'] });

    const profileButton = screen.getByTestId(profileIcon);

    await userEvent.click(profileButton);

    await waitFor(() => {
      expect(window.location.pathname).toBe('/');
      expect(screen.getByTestId(profileIcon)).toBeInTheDocument();
    });
  });
});
