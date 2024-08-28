import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import icon from '../../assets/images/icons.svg';
import css from './TransactionForm.module.css';
import Modal from '../Modal/Modal';
import { useSelector } from 'react-redux';
import { getCategories } from '../../redux/categories/selectors';
import { CategoryList } from '../CategoryList/CategoryList';

export const TransactionForm = () => {
  const [formData, setFormData] = useState({
    type: 'expenses',
  });
  const datePicker = useRef(null);
  const timePicker = useRef(null);
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  const categories = useSelector(getCategories);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  /* const [categoryList, setCategoryList] = useState(categories);

   useEffect(() => {
     setCategoryList(categories);
   }, [categories])*/

  useEffect(() => {
    const now = new Date();

    const date = now.toISOString().split('T')[0];
    setCurrentDate(date);

    const time = now.toTimeString().split(' ')[0].slice(0, 5);
    setCurrentTime(time);
  }, []);

  const handleChange = (value, field) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>{formData.type}</h2>
        <CategoryList
          onItemClick={(category) => {
            handleChange(category, 'category');
            closeModal();
          }}
          type={formData.type}
          categories={categories[formData.type] || []} />
      </Modal>

      <form className={css.container}>
        <div className={css.typeContainer}>
          <div className={css.radioContainer}>
            <input
              type="radio"
              id="expense"
              name="transaction"
              value="expenses"
              onChange={(e) => handleChange(e.target.value, 'type')}
              defaultChecked
            />
            <label
              htmlFor="expense"
            >
              Expense
            </label>
          </div>
          <div className={css.radioContainer}>
            <input
              type="radio"
              id="income"
              name="transaction"
              value="incomes"
              onChange={(e) => handleChange(e.target.value, 'type')}
            />
            <label
              htmlFor="income"
            >
              Income
            </label>
          </div>
        </div>

        <div className={css.dateTimeContainer}>
          <div className={css.dateContainer}>
            <label htmlFor="date">
              Date
            </label>
            <div style={{ position: 'relative' }}>
              <input
                ref={datePicker}
                value={currentDate}
                type="date"
                onClick={e => e.currentTarget.showPicker()}
                onChange={e => setCurrentDate(e.target.value)}
              />
              <svg onClick={() => datePicker.current?.click()}>
                <use href={`${icon}#calendar-icon`} />
              </svg>
            </div>
          </div>
          <div className={css.dateContainer}>
            <label htmlFor="time">
              Time
            </label>
            <div style={{ position: 'relative' }}>
              <input
                ref={timePicker}
                value={currentTime}
                type="time"
                onClick={e => e.currentTarget.showPicker()}
                onChange={e => setCurrentTime(e.target.value)}
              />
              <svg onClick={() => timePicker.current?.click()}>
                <use href={`${icon}#clock-icon`} />
              </svg>
            </div>
          </div>
        </div>

        <div className={css.fieldContainer}>
          <label
            htmlFor="category"
          >
            Category
          </label>
          <input
            readOnly
            onClick={openModal}
            type="text"
            placeholder="Enter the category"
            value={formData.category?.categoryName || ''}
          />
        </div>

        <div className={css.fieldContainer}>
          <label
            htmlFor="sum"
          >
            Sum
          </label>
          <div style={{ position: 'relative' }}>
            <input
              style={{ width: '454px' }}
              type="number"
              placeholder="Enter the sum"
            />
            <span className={css.currency}>
              USD
            </span>
          </div>
        </div>

        <div className={css.fieldContainer}>
          <label
            htmlFor="comment"
          >
            Comment
          </label>
          <textarea
            style={{ height: '97px' }}
            placeholder="Enter the text"
          />

        </div>

        <button
          type="submit"
          className="primary-button"
        >
          Add
        </button>

      </form>
    </>
  );
};
