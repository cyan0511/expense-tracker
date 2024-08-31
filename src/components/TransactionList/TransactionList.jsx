import css from './TransactionList.module.css';
import { TransactionsSearchTools } from '../TransactionsSearchTools/TransactionsSearchTools';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/transactions/selectors';
import { deleteTransaction } from '../../redux/transactions/operations';
import Modal from '../Modal/Modal';
import { TransactionForm } from '../TransactionForm/TransactionForm';
import React, { useState } from 'react';
import { useTransactionForm } from '../../context/TransactionProvider';

export const TransactionList = ({ transactions }) => {
  const dispatch = useDispatch();
  const { value: query, date } = useSelector(getFilter);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const { setFormData } = useTransactionForm();
  const { setFormData: setTransaction } = useTransactionForm();

  const fields = ['category', 'comment', 'date', 'time', 'sum'];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const filterTransactions = data => {
    return data.filter(obj => {
      return fields.some(prop => {
        if (typeof obj[prop] === 'object' && prop === 'category') {
          return String(obj[prop].categoryName).toLowerCase().includes(String(query).toLowerCase());
        }

        if (obj[prop] !== undefined) {
          return String(obj[prop]).toLowerCase().includes(String(query).toLowerCase());
        }
        return false;
      }) && (!date || (date && obj.date === date));
    });
  };

  const filteredData = filterTransactions(transactions);

  const handleEdit = transaction => e => {
    setTransaction(transaction);
    openModal();
  };

  const handleDelete = ({ _id, type }) => e => {
    dispatch(deleteTransaction({ _id, type }));
  };

  return (
    <div className={css.container}>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <TransactionForm onSave={closeModal} />
      </Modal>
      <div className={css.header}>
        <TransactionsSearchTools />
      </div>
      <div>
        <div className={`${css.row} ${css.tableHeader}`}>
          {fields.map((field, i) => (
            <span key={i} className={css.cell}>{field}</span>
          ))}
          <span className={css.cell}>Actions</span>
        </div>
        <ul className={css.table}>
          {filteredData?.map((t, i) => (
            <li key={i} className={css.row}>
              {fields.map((field, i) => (
                <span key={i} className={css.cell}>{field === 'category' ? t[field].categoryName : t[field]}</span>
              ))}
              <span className={css.cell + ' ' + css.actionButtons}>
                <button className="primary-button" onClick={handleEdit(t)}>Edit</button>
                <button className="secondary-button"
                  onClick={handleDelete({ type: t.type, _id: t._id })}>Delete</button>
              </span>
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
};
