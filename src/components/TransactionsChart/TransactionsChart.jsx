import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import css from './TransactionsChart.module.css';
import { useSelector } from 'react-redux';
import { getCategories } from '../../redux/categories/selectors';

Chart.register(ArcElement, Tooltip, Legend);

export const TransactionsChart = () => {
  const categories = useSelector(getCategories).expenses; // ['Hobby', 'Products', 'Cinema', 'Health'];
  const data = {
    labels: categories.map(c => c.categoryName),
    datasets: [
      {
        data: [45, 25, 20, 10],
        backgroundColor: ['#0EF387', '#0EBB69', '#fafafa', '#fafafa80'],
        borderWidth: 0,
        borderRadius: 10,
        spacing: -60,
      },
    ],
  };

  const options = {
    rotation: -82, // Start angle for the chart
    circumference: 170, // Sweep angle for the chart
    cutout: '70%', // Cut out the middle of the chart
    plugins: {
      legend: {
        display: false, // Hide the default legend
      },
    },
  };

  return (
    <div className={css.container}>
      <h2>Expenses categories</h2>
      <div className={css.data}>
        <div className={css.chart}>

          <Doughnut data={data} options={options} />
          <div className={css.percentage}>
            100%
          </div>
        </div>

        <div className={css.categories}>
          <ul>
            {categories.map((cat, index) => (
                <li key={index}>
                  <div style={{ display: 'flex', alignItems:'center', gap: '8px' }}>
                    <div style={{width: '12px', height: '12px', background: '#0EF387', borderRadius: 9999}} />
                    {cat.categoryName}
                  </div>
                  <span>45%</span></li>
              )
            )}

          </ul>
        </div>
      </div>
    </div>
  );
};
