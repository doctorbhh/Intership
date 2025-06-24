import React from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const OverviewChart = () => {
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Students',
        data: [25, 30, 20, 28, 12, 20, 32],
        backgroundColor: '#8E44AD',
        borderRadius: 5,
        stack: 'stack1',
      },
      {
        label: 'Organization',
        data: [20, 28, 15, 22, 10, 18, 26],
        backgroundColor: '#DDA0DD',
        borderRadius: 5,
        stack: 'stack1',
      },
      {
        label: 'Instructors',
        data: [18, 20, 15, 18, 8, 15, 24],
        backgroundColor: '#F8F2F8',
        borderRadius: 5,
        stack: 'stack1',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          pointStyle: 'rectRounded',
          boxWidth: 8,
          color: '#333',
          font: {
            size: 12,
            family: 'Arial',
          },
        },
      },
      tooltip: {
        backgroundColor: '#333',
        cornerRadius: 4,
        padding: 8,
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          color: '#666',
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          stepSize: 20,
          color: '#666',
        },
        grid: {
          color: '#eee',
        },
      },
    },
  };

  return (
    <div style={{ height: '284px', width:'387px'}}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default OverviewChart;
