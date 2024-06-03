// src/components/LineChart/ChartData.jsx
const prepareChartData = (filteredData) => {
    const labels = filteredData.map(data => data.date);
    const dataPoints = filteredData.map(data => data.totalCost);
  
    return {
      labels,
      datasets: [
        {
          label: 'Total Cost',
          data: dataPoints,
          fill: false,
        }
      ]
    };
  };
  
  export default prepareChartData;
  