import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, LinearScale, PointElement, CategoryScale, Tooltip, Filler);

const RevenueSummaryChart = () => {
  const data = {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Revenue',
        data: [5000, 15000, 30000, 50000, 10000, 25000, 45000, 85000],
        borderColor: '#9C27B0',
        backgroundColor: (ctx) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, 'rgba(156, 39, 176, 0.4)');
          gradient.addColorStop(1, 'rgba(156, 39, 176, 0)');
          return gradient;
        },
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: '#666',
          font: { size: 12 },
        },
        grid: { display: false },
      },
      y: {
        ticks: {
          color: '#666',
          font: { size: 12 },
          callback: (value) => `${value / 1000}k`,
        },
        grid: {
          color: '#eee',
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 8,
        cornerRadius: 4,
      },
    },
  };

  return (
    <div style={{ height: '251px',width:'380px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default RevenueSummaryChart;
