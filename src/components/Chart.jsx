import React from "react";
import {Line, Bar} from 'react-chartjs-2';

const chartTypes = { Line, Bar }

function Chart(props) {
  const ChartName = chartTypes[props.chart];

  function data(canvas) {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(63, 81, 181, 700);
    gradient.addColorStop(0, '#929dd9');
    gradient.addColorStop(1, '#172b4d');

    return {
      labels: props.labelData,
      datasets: [
        {
          label: 'BMI',
          data: props.bmiData,
          backgroundColor: gradient,
          borderColor: '#3F51B5',
          pointRadius: 6,
          pointHoverRadius: 8,
          pointHoverBorderColor: 'white',
          pointHoverBorderWidth: 2
        }
      ]
    };
  }

  const options = {
    responsive: true,
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Date',
            fontSize: 18,
            fontColor: 'white'
          },
          gridLines: {
            display: false,
            color: 'white'
          },
          ticks: {
            fontColor: 'white',
            fontSize: 16,
          }
        }
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'BMI',
            fontSize: 18,
            fontColor: 'white'
          },
          gridLines: {
            display: false,
            color: 'white'
          },
          ticks: {
            fontColor: 'white',
            fontSize: 16,
            beginAtZero: true
          }
        }
      ]
    },
    tooltips: {
      titleFontSize: 13,
      bodyFontSize: 13
    }
  };

  return (
    <>
      <ChartName data={data} options={options} />
    </>
  );
}

export default Chart;