import React from 'react';
import css from './TransactionsTotalAmount.module.css';
import icons from '../../assets/images/icons.svg';

export const TransactionsTotalAmount = () => {
  return (
    <div className={css.container}>
      <div className={css.totalContainer}>
        <div className={css.arrow}>
          <svg width="15" height="17">
            <use href={`${icons}#arrow-up`} />
          </svg>
        </div>

        <div style={{
          left: 88,
          top: 32,
          position: 'absolute',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 7,
          display: 'inline-flex',
        }}>
          <div style={{
            color: 'rgba(249.69, 249.69, 249.69, 0.50)',
            fontSize: 16,
            fontWeight: '400',
            wordWrap: 'break-word',
          }}>Total Income
          </div>
          <div style={{ color: '#FAFAFA', fontSize: 24, fontWeight: '700', wordWrap: 'break-word' }}>$632.000</div>
        </div>
      </div>
      <div className={css.totalContainer}>
        <div className={css.arrow}>
          <svg width="15" height="17">
            <use href={`${icons}#arrow-down`} />
          </svg>
        </div>
        <div style={{
          left: 88,
          top: 32,
          position: 'absolute',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 7,
          display: 'inline-flex',
        }}>
          <div style={{
            color: 'rgba(249.69, 249.69, 249.69, 0.50)',
            fontSize: 16,
            fontWeight: '400',
            wordWrap: 'break-word',
          }}>Total Expense
          </div>
          <div style={{ color: '#FAFAFA', fontSize: 24, fontWeight: '700', wordWrap: 'break-word' }}>$632.000</div>
        </div>
      </div>
    </div>

  );
};
