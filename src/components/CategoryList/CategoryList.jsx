import css from './CategoryList.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../redux/categories/operations';
import { CategoryListItem } from '../CategoryListItem/CategoryListItem';


export const CategoryList = ({ categories, type, onItemClick }) => {
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState('');

  const handleAddCategory = (e) => {
    dispatch(addCategory({ type, categoryName }));
    setCategoryName('');
  };

  return (
    <div className={css.container}>
      <span className={css.categories}>All Category</span>
      <div>
        <ul>
          {categories
            .map((c, i) => (
              <CategoryListItem onItemClick={onItemClick} key={i} category={c} />
            ))}
        </ul>
      </div>
      <div className={css.newCategoryContainer}>
        <span>New Category</span>
        <input type="text"
          value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />

        <button disabled={!categoryName}
          onClick={handleAddCategory}
          className="primary-button" type="button">Add
        </button>

      </div>
    </div>
  );
};
