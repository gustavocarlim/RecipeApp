import { NavLink } from 'react-router-dom';
import style from '../style/footer.module.css';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer" className={ style.footer }>
      <NavLink to="/drinks">
        <img src={ drinkIcon } alt="drink" data-testid="drinks-bottom-btn" />
      </NavLink>

      <NavLink to="/meals">
        <img src={ mealIcon } alt="meal" data-testid="meals-bottom-btn" />
      </NavLink>
    </footer>
  );
}

export default Footer;
// commirte pra corrigir o merge//
