import React from 'react';
import css from './Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={css.modalOverlay}>
      <div className={css.modalContainer}>
        <button className={css.modalCloseButton} onClick={onClose}>
          &times;
        </button>
        <div className={css.modalContent}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
