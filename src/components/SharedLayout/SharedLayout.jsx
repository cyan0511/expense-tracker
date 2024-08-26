import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Suspense } from 'react';
import css from './SharedLayout.module.css';
import { BgImageWrapper } from '../BgImageWrapper/BgImageWrapper';
import { useAuth } from '../../hooks/useAuth';

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className={css.container}>
      <Header />
      <div className={css.mainContainer}>
        {!isLoggedIn && <BgImageWrapper />}

        <Suspense fallback={null}>
          <Outlet />
        </Suspense>

      </div>
    </div>
  );
};
