// src/components/VisualizationComponent/VisualizationComponent.jsx
import React from 'react';
import LineChart from '../LineChart/LineChart';
import prepareChartData from '../LineChart/ChartData';


function VisualizationComponent({ filteredData }) {
  const chartData = prepareChartData(filteredData);

  return (
    <div>
      <LineChart chartData={chartData} />
    </div>
  );
}

export default VisualizationComponent;
