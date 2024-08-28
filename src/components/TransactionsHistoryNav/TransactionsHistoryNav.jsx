import { NavLink } from 'react-router-dom';
import css from '../TransactionsHistoryNav/TransactionsHistoryNav.module.css';

export const TransactionsHistoryNav = () => {
  return (
    <div className={css.container}>
      <NavLink
        to="/transactions/expenses"
        className={({ isActive }) => (isActive ? 'primary-button' : 'secondary-button')}
      >
        All Expense
      </NavLink>
      <NavLink
        style={{ textDecoration: 'none' }}
        to="/transactions/income"
        className={({ isActive }) => (isActive ? 'primary-button' : 'secondary-button')}
      >
        All Income
      </NavLink>

    </div>
  );
};
