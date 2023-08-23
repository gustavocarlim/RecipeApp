import { MemoryRouter, useNavigate } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Header from '../Components/Header';
import RecipiesProvider from '../context/RecipiesProvider';

describe('Verifica o componente <Header />', () => {
  test('Verifica se existe um título', () => {
    render(
      <MemoryRouter>
        <RecipiesProvider>
          <Header />
        </RecipiesProvider>
      </MemoryRouter>,
    );

    const title = screen.getByTestId('page-title');
    expect(title).toBeInTheDocument();
  });

  test('Verifica se existe um ícone de perfil', () => {
    render(
      <MemoryRouter>
        <RecipiesProvider>
          <Header />
        </RecipiesProvider>
      </MemoryRouter>,
    );

    const iconProfile = screen.getByTestId('profile-top-btn');
    expect(iconProfile).toBeInTheDocument();
  });

  test('Verifica se existe um ícone de pesquisa', () => {
    render(
      <MemoryRouter>
        <RecipiesProvider>
          <Header />
        </RecipiesProvider>
      </MemoryRouter>,
    );

    const iconSearch = screen.getByTestId('search-top-btn');
    expect(iconSearch).toBeInTheDocument();
  });

  test('Verifica se a entrada de pesquisa é alternada ao clicar no botão de pesquisa', () => {
    render(
      <MemoryRouter>
        <RecipiesProvider>
          <Header />
        </RecipiesProvider>
      </MemoryRouter>,
    );

    const searchInput = screen.queryByTestId('search-input');
    const buttonSearch = screen.getByTestId('search-top-btn');

    expect(searchInput).not.toBeInTheDocument();

    userEvent.click(buttonSearch);
    expect(screen.queryByPlaceholderText('Search')).toBeInTheDocument();

    userEvent.click(buttonSearch);
    expect(searchInput).not.toBeInTheDocument();
  });

  // test('Verifica se ao clicar no ícone de perfil, a página é redirecionada', () => {
  //   render(
  //     <MemoryRouter>
  //       <RecipiesProvider>
  //         <Header />
  //       </RecipiesProvider>
  //     </MemoryRouter>,
  //   );

  //   const navigate = useNavigate();
  //   const buttonProfile = screen.getByTestId('profile-top-btn');

  //   userEvent.click(buttonProfile);
  //   expect(navigate).toHaveBeenCalledWith('/profile');
  // });
});
