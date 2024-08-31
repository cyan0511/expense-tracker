import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { lazy, useEffect, useState } from 'react';
import { refreshToken } from '../redux/auth/authOperations';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const MainTransactionsPage = lazy(() => import('../pages/MainTransactionsPage/MainTransactionsPage'));
const TransactionsHistoryPage = lazy(() => import('../pages/TransactionsHistoryPage/TransactionsHistoryPage'));

export function App() {
  const dispatch = useDispatch();
  const { isLoggedIn, token, sid, isRefreshing } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      if (token && !isLoggedIn) {
        await dispatch(refreshToken({ sid })).unwrap();
      }
      setIsLoading(false); // Set loading to false after checking auth status
    };

    checkAuthStatus();
  }, [dispatch, token, isLoggedIn, sid]);



 /* if (isRefreshing) {
    return(
      <>
        <h3>Authenticating...</h3>
      </>
    )
  }*/

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<RestrictedRoute
          component={<WelcomePage />}
          redirectTo="/transactions"
        />} />
        <Route
          path="/signup"
          element={
            <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/" component={<LoginPage />} />
          }
        />
        {/* Protected routes (accessible only when logged in) */}
        <Route
          path="/transactions"
          element={
            <PrivateRoute
              component={<MainTransactionsPage />}
              redirectTo="/"
            />
          }
        />
        <Route
          path="/transactions/history/:transactionType"
          element={
            <PrivateRoute
              component={<TransactionsHistoryPage />}
              redirectTo="/"
            />
          }
         />
      </Route>
    </Routes>
  );

}
