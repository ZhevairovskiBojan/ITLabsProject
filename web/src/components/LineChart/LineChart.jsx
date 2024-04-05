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
          text: 'Text',
        },
      },
      y: {
        beginAtZero: true, // Започни од нула
        ticks: {
          stepSize: 10, // Секој чекор да биде 10
        },
        min: 0, // Минимумот на опсегот на оската
        max: 100, // Максимумот на опсегот на оската
        title: {
          display: true,
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;
