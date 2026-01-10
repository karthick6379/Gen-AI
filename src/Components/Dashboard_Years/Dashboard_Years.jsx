import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import './Dashboard_Years.css';

const Dashboard_Years = () => {
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);

  useEffect(() => {
    // Line chart (Tickets Received month-wise)
    if (lineChartRef.current) {
        const lineOptions = {
            series: [{
              name: "Tickets Received",
              data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }],
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight',
              width: 5   // <-- increase thickness here
            },
            title: {
              text: 'Tickets Received Month wise',
              align: 'center'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
              },
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
          };
          

      const lineChart = new ApexCharts(lineChartRef.current, lineOptions);
      lineChart.render();

      return () => {
        lineChart.destroy();
      };
    }
  }, []);

  useEffect(() => {
    // Bar chart (Tickets Received vs Tickets Solved)
    if (barChartRef.current) {
      const colors = ['#5070dd', '#b6d634'];  // blue = received, green = solved

      const barOptions = {
        series: [
          {
            name: 'Tickets Received',
            data: [120, 200, 150, 80, 70, 110, 130, 160, 140, 180, 170, 190]
          },
          {
            name: 'Tickets Solved',
            data: [100, 180, 120, 70, 60, 100, 120, 150, 130, 160, 150, 170]
          }
        ],
        chart: {
          type: 'bar',
          height: 350
        },
        colors: colors,
        tooltip: {
          shared: true,
          intersect: false
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '45%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        legend: {
          position: 'top'
        },
        xaxis: {
          categories: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
          ]
        },
        yaxis: {
          title: {
            text: 'Tickets'
          }
        },
        fill: {
          opacity: 1
        }
      };

      const barChart = new ApexCharts(barChartRef.current, barOptions);
      barChart.render();

      return () => {
        barChart.destroy();
      };
    }
  }, []);

  return (
    <div className='Graph-container'>
      <div className='Graph-section'>
        {/* Line chart */}
        <div id="lineChart" ref={lineChartRef}></div>
      </div>
      <div className='Graph-chart'>
        {/* Bar chart */}
        <div id="barChart" ref={barChartRef} style={{ width: '100%', height: '350px' }}></div>
      </div>
    </div>
  );
};

export default Dashboard_Years;
