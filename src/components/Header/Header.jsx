import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { useAuth } from '../../hooks/useAuth';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { UserBarBtn } from '../UserBarBtn/UserBarBtn';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={ isLoggedIn ? css.authHeader : css.header}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      >
        <Logo />

      </NavLink>
      <Navigation />
      {isLoggedIn ? <UserBarBtn /> : null }
    </header>
  );
};
