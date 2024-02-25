import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const BarGraph = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Example Dataset',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        barThickness: 50,
        barHeight: 100,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  return (
    <div style={{ height: '30%' }}>
      <Bar
        data={data}
        options={{
          title: {
            display: true,
            text: 'Bar Graph Example',
            fontSize: 20,
            maintainAspectRatio: false
          },
          legend: {
            display: true,
            position: 'top',
          },
          scales: {
            xAxes: [
              {
                type: 'category', 
                scaleLabel: {
                  display: true,
                  labelString: 'Month',
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Value',
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default BarGraph;
