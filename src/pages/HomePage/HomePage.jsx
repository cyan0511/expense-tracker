import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useAuth } from '../../hooks/useAuth';
import { WelcomePage } from '../WelcomePage/WelcomePage';
import { MainTransactionsPage } from '../MainTransactionsPage/MainTransactionsPage';

const HomePage = () => {
  const { isLoggedIn } = useAuth();
  return(
    <HelmetProvider>
      <Helmet>
        <title>Expense Tracker</title>
      </Helmet>
      <WelcomePage />
    </HelmetProvider>
  );
}

export default HomePage;
