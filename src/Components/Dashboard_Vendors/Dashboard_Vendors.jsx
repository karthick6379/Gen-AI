import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import * as echarts from 'echarts';
import './Dashboard_Vendors.css';

const Dashboard_Vendors = () => {
  const chartRef = useRef(null);
  const pieRef = useRef(null);

  // ApexCharts horizontal bar chart
  useEffect(() => {
    if (chartRef.current) {
      const options = {
        series: [{
          data: [120, 110, 100, 90, 80, 70, 60, 50, 40 ,30 ,20 ,10]
        }],
        chart: {
          type: 'bar',
          height: 350,
          width: '100%'
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            borderRadiusApplication: 'end',
            horizontal: true,
            colors: {
              ranges: [
                { from: 0, to: 45, color: '#65B581' },   // green
                { from: 45, to: 90, color: '#FFCE34' },  // yellow
                { from: 90, to: 999999, color: '#FD665F' } // red
              ]
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [
            'vendor 9', 'vendor 8', 'vendor 7', 'vendor 6',
            'vendor 5', 'vendor 4', 'vendor 3', 'vendor 2', 'vendor 1', 'vendor'
          ],
          min: 0,
          max: 150,
          tickAmount: 5,
          labels: {
            formatter: function (val) {
              return val;
            }
          }
        }
      };

      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      // Handle window resize
      const handleResize = () => {
        if (chartRef.current) {
          // chart.resize();
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        chart.destroy();
      };
    }
  }, []);

  // ECharts pie chart
  useEffect(() => {
    if (pieRef.current) {
      const pieChart = echarts.init(pieRef.current);

      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c}'   // show only category and value, no "Access From"
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: '',   // remove series name to avoid "Access From"
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 30,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: 'Germany' },
              { value: 735, name: 'Belgium' },
              { value: 580, name: 'France' },
              { value: 484, name: 'Denmark' },
              { value: 300, name: 'Italy' }
            ]
          }
        ]
      };

      pieChart.setOption(option);

      // Handle window resize for ECharts
      const handleResize = () => {
        if (pieRef.current) {
          // pieChart.resize();
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        pieChart.dispose();
      };
    }
  }, []);

  return (
    <div className='vendor-container'>
      <div className='vendor-section'>
        <div className='Vendor-title'>
          <span>⚠️</span> 
          <span> Vendors Requires Attention </span>
          <span>⚠️</span> 
        </div>
        {/* Bar chart */}
        <div id="chart" ref={chartRef}></div>
        <div className='boxs'>
          <div className='box1'>
            <div className='low'></div>
            <span>Low</span>
          </div>
          <div className='box2'>
            <div className='medium'></div>
            <span>Medium</span>
          </div>
          <div className='box3'>
            <div className='high'></div>
            <span>High</span>
          </div>
        </div>
      </div>

      <div className='country-pie'>
        <div className='pie-title'>
          <span>Global Ticket Count</span>
        </div>  
        {/* Pie chart */}
        <div id="piechart" ref={pieRef}></div>
      </div>
    </div>
  );
};

export default Dashboard_Vendors;
