import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css';
import { Logo } from '../Logo/Logo';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.navbar}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      >
        <Logo />

      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          <button>
            Contacts
          </button>
        </NavLink>
      )}
    </nav>
  );
};
