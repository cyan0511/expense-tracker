import icon from '../../assets/images/icons.svg';
import React, { useState } from 'react';
import css from './CategoryListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteCategory, updateCategory } from '../../redux/categories/operations';

export const CategoryListItem = ({ category, onItemClick }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [categoryName, setCategoryName] = useState(category.categoryName);


  const handleUpdate = () => {
    dispatch(updateCategory({ _id: category._id, categoryName }));
    setIsEdit(false);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(deleteCategory(category._id));
  };

  return (
    <li onClick={() => {if (!isEdit) onItemClick(category)}}>
      {!isEdit && categoryName}
      {isEdit &&
        <input type="text"
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setCategoryName(category.categoryName);
              setIsEdit(false);
            }
          }}
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)} />}
      <div className={css.actionButtons}>
        {!isEdit &&
          <svg onClick={(e) => { e.stopPropagation(); e.preventDefault(); setIsEdit(true)}}>
            <use href={`${icon}#edit`} />
          </svg>}
        {!isEdit &&
          <svg onClick={(e) => handleDelete(e)}>
            <use href={`${icon}#trash`} />
          </svg>}
        {isEdit &&
          <svg onClick={() => handleUpdate()}>
            <use href={`${icon}#check`} />
          </svg>}
      </div>
    </li>
  );
};
