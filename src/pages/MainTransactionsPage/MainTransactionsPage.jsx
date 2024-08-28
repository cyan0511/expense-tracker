import React, { useEffect } from 'react';
import { TransactionsTotalAmount } from 'components/TransactionsTotalAmount/TransactionsTotalAmount';
import { TransactionsChart } from 'components/TransactionsChart/TransactionsChart';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';
import css from './MainTransactionsPage.module.css';
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../../redux/categories/operations';

const MainTransactionsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <div className={css.leftContainer}>
        <h2>
          Expense Log
        </h2>
        <p>
          Capture and organize every penny spent with ease! A clear view of
          your financial habits at your fingertips.
        </p>

        <div style={{marginTop: '40px'}}>
          <TransactionsTotalAmount />
        </div>
        <div style={{ marginTop: '40px' }}>
          <TransactionsChart />
        </div>
      </div>

      {/* Form */}
      <div className="">
        <TransactionForm />
      </div>
    </div>
  );
};

export default MainTransactionsPage;
