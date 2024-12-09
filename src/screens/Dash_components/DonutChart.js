// src/components/DonutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Register all necessary components
Chart.register(...registerables);

// Set default font family and color to mimic Bootstrap's default styling
Chart.defaults.font.family = 'Nunito, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
Chart.defaults.color = '#858796';

const DonutChart = () => {
  // Prepare the data for the chart
  const data = {
    labels: ['Boarding', 'Day'],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['#4e73df', 'red'],
        hoverBackgroundColor: ['#2e59d9', '#17a673'],
        hoverBorderColor: 'rgba(234, 236, 244, 1)',
      },
    ],
  };

  // Chart options
  const options = {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: 'rgb(255, 255, 255)',
      bodyFontColor: 'purple',
      borderColor: '#dddfeb',
      borderWidth: 1,
      padding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: '50%', // This is the equivalent of cutoutPercentage in Chart.js v3+
  };

  // Custom legend component
  const Legend = () => (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
      {data.labels.map((label, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
          <div
            style={{
              width: '15px',
              height: '15px',
              backgroundColor: data.datasets[0].backgroundColor[index],
              marginRight: '5px',
            }}
          />
          <span>{label}: {data.datasets[0].data[index]}%</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Student Summary</h6>
      </div>
      <div className="card-body">
        <Legend /> {/* Custom Legend */}
        <div className="chart-pie pt-3">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default DonutChart;