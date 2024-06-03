// src/components/LineChart/LineChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend, 
  TimeScale
} from 'chart.js';

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend, 
  TimeScale
);

function LineChart({ chartData }) {
  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
        min: 0,
        max: 100,
        title: {
          display: true,
          text: 'Total Cost',
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;
