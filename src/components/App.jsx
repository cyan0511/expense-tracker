import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { lazy, useEffect } from 'react';
import { refreshUser } from '../store/auth/authOperations';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

export function App() {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

 /* useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);*/

  return isRefreshing ? (
    <>
      <h3>Authenticating...</h3>
    </>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/signup"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={null} />
          }
        />
      </Route>
    </Routes>
  );

}
