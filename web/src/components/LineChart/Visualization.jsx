
function VisualizationComponent({ filteredData }) {
    const chartData = prepareChartData(filteredData);
  
    return (
      <div>
        
        <LineChart chartData={chartData} />
      </div>
    );
  }
  