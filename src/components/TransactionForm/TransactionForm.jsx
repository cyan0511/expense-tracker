import React, { useState, useRef } from 'react';
import icon from '../../assets/images/icons.svg';
import css from './TransactionForm.module.css';
import { useSelector } from 'react-redux';
import { getCategories } from '../../redux/categories/selectors';
import { useTransactionForm } from '../../context/TransactionProvider';
import { CategoriesModal } from '../CategoriesModal/CategoriesModal';
import { getUser } from '../../redux/user/selectors';

export const TransactionForm = ({ onSave }) => {
  const user = useSelector(getUser);
  const { formData, handleChange, handleSubmit } = useTransactionForm();

  const datePicker = useRef(null);
  const timePicker = useRef(null);

  const categories = useSelector(getCategories);

  const [category, setCategory] = useState(formData.category);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <CategoriesModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        type={formData.type}
        categories={categories[formData.type] || []}
        onItemClick={(category) => {
          setCategory(category);
          handleChange('category', category._id);
          closeModal();
        }}
        title={formData.type}
      />

      <form className={css.container} onSubmit={(e) => { handleSubmit(e); (onSave && onSave()); setCategory(null);}}>
        <div className={css.typeContainer}>
          <div className={css.radioContainer}>
            <input
              type="radio"
              id="expense"
              name="transaction"
              value="expenses"
              onChange={(e) => {
                setCategory(null); handleChange('type', e.target.value);
              }}
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
              onChange={(e) => {
                setCategory(null);
                handleChange('type', e.target.value)
              }}
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
                value={formData.date || ''}
                type="date"
                onClick={e => e.currentTarget.showPicker()}
                onChange={e => handleChange('date', e.target.value)}
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
            <div className={css.timeContainer} style={{ position: 'relative' }}>
              <input
                ref={timePicker}
                value={formData.time || ''}
                type="time"
                onClick={e => e.currentTarget.showPicker()}
                onChange={e => handleChange('time', e.target.value)}
              />
              <svg  onClick={() => timePicker.current?.click()}>
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
            value={category?.categoryName || ''}
          />
        </div>

        <div className={css.fieldContainer}>
          <label
            htmlFor="sum"
          >
            Sum
          </label>
          <div className={css.sumContainer}>
            <input
              type="number"
              placeholder="Enter the sum"
              value={formData.sum || ''}
              onChange={(e) => handleChange('sum', e.target.value)}
            />
            <span className={css.currency}>
              {user.currency}
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
            value={formData.comment || ''}
            onChange={(e) => handleChange('comment', e.target.value)}
          />

        </div>

        <button
          type="submit"
          className="primary-button"
        >
          {formData._id ? 'Save' : 'Add'}
        </button>

      </form>
    </>
  );
};
