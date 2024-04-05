
const prepareChartData = (filteredData) => {
    const labels = filteredData.map(data => data.date);
    const dataPoints = filteredData.map(data => data.totalCost);
  
    return {
      labels,
      datasets: [
        {
          data: dataPoints,
          fill: false,
        }
      ]
    };
  };
  