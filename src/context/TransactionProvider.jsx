import React, { createContext, useContext, useEffect, useState } from 'react';
import { addTransaction, updateTransaction } from '../redux/transactions/operations';
import { useDispatch } from 'react-redux';

const TransactionContext = createContext({
  formData: {
    type: 'incomes',
  }, setFormData: () => {
  },
});

export const useTransactionForm = () => useContext(TransactionContext);

export const TransactionProvider = ({ children, transaction }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(transaction || {
    type: 'expenses',
  });

  useEffect(() => {
    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const time = now.toTimeString().split(' ')[0].slice(0, 5);

    setFormData(prev => ({
      type: prev.type,
      date,
      time,
    }));

  }, []);

  const handleSubmit = event => {
    // Prevent the default form submission behavior
    event.preventDefault();

    if (formData._id) {
      dispatch(updateTransaction(formData));
    } else {
      dispatch(addTransaction(formData));
    }

    setFormData(prev => ({
      type: prev.type,
    }));
  };

  /*const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'type':
        setType(value);
        break;
      case 'date':
        setDate(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };*/

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });

  };

  return (
    <TransactionContext.Provider
      value={{ formData, setFormData, handleChange, handleSubmit }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
