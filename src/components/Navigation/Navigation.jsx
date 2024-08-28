import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css';
import { TransactionsHistoryNav } from '../TransactionsHistoryNav/TransactionsHistoryNav';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.navbar}>
      {isLoggedIn && (
        <TransactionsHistoryNav />
      )}
    </nav>
  );
};
