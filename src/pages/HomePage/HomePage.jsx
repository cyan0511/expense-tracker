import { Helmet, HelmetProvider } from 'react-helmet-async';
import css from './HomePage.module.css';
import fleur from '../../assets/images/Fleur-Cook.png';
import ethan from '../../assets/images/Ethan-Valdez.png';
import amanda from '../../assets/images/Amanda-Lowery.png';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <HelmetProvider>
    <Helmet>
      <title>Expense Tracker</title>
    </Helmet>
      <div className={css.actionContainer}>
        <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
          <h1>expense log</h1>
          <div className={css.manageFinance}>
            Manage Your
            {' '}
            <span>Finances</span>
            {' '}
            Masterfully!
          </div>
          <p>
            ExpenseTracker effortlessly empowers you to take control of your finances! With intuitive features, it
            simplifies the process of tracking and managing expenses, allowing for a stress-free mastery over your
            financial world.
          </p>
          <div className={css.actionButtons}>
            <Link to="/signup">
              <button className="primary-button" type="submit">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="secondary-button" type="submit">Sign In</button>
            </Link>
          </div>
        </div>
        <div className={css.usersContainer}>
          <div className={css.avatars}>
            <img
              className={css.fleur}
              src={fleur}
              width="48"
              height="48"
              alt="fleur cook"
            />
            <img
              className={css.ethan}
              src={ethan}
              width="48"
              height="48"
              alt="ethan valdez"
            />
            <img
              className={css.amanda}
              src={amanda}
              width="48"
              height="48"
              alt="amanda lowery"
            />
          </div>
          <div style={{ marginLeft: '155px' }}>
            <h2>
              1000 users +
            </h2>
            <p>
              Trusted by users for reliable expense tracking!
            </p>
          </div>
        </div>
      </div>
  </HelmetProvider>
);

export default HomePage;
