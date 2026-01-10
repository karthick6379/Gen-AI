import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';   // use Apache ECharts
import './Dashboard_Tickets.css';

const DashboardTickets = () => {
  const chartRef = useRef(null);
  const [totalTickets, setTotalTickets] = useState(0);
  const [openTickets, setOpenTickets] = useState(0);
  const [resolvedTickets, setResolvedTickets] = useState(0);
  const [pendingTickets, setPendingTickets] = useState(0);

  // Animation function with smooth easing
  const animateNumber = (start, end, duration, callback) => {
    const startTime = performance.now();
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * easeOut);
      callback(current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        callback(end);
      }
    };
    
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Animate numbers on component mount
    animateNumber(0, 125, 2000, setTotalTickets);
    animateNumber(0, 42, 2000, setOpenTickets);
    animateNumber(0, 78, 2000, setResolvedTickets);
    animateNumber(0, 5, 2000, setPendingTickets);
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
  
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c}'   // only show name and count
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: '',   // removed "Access From"
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '70%'],
            startAngle: 180,
            endAngle: 360,
            data: [
              { value: 125, name: 'Total Tickets' },
              { value: 42, name: 'Open Tickets' },
              { value: 78, name: 'Resolved Tickets' },
              { value: 5, name: 'Pending Tickets' },
            ]
          }
        ]
      };
  
      chart.setOption(option);
  
      // cleanup
      return () => {
        chart.dispose();
      };
    }
  }, []);
  

  return (
    <div className="dashboard-container">
      <div className="boxes-section">
        <div className="boxes-section-top">
          <div className="box">
            <div className="box-content">
              <div className="box-number">{totalTickets}</div>
              <div className="box-text">Total Tickets</div>
            </div>
          </div>
          <div className="box">
            <div className="box-content">
              <div className="box-number">{openTickets}</div>
              <div className="box-text">Open Tickets</div>
            </div>
          </div>
        </div>
        <div className="boxes-section-bottom">
          <div className="box">
            <div className="box-content">
              <div className="box-number">{resolvedTickets}</div>
              <div className="box-text">Resolved Tickets</div>
            </div>
          </div>
          <div className="box">
            <div className="box-content">
              <div className="box-number">{pendingTickets}</div>
              <div className="box-text">Pending Tickets</div>
            </div>
          </div>
        </div>
      </div>
      <div className="charts-section">
        <div id="chart" ref={chartRef} style={{ width: '100%', height: '300px' }}></div>
      </div>
    </div>
  );
};

export default DashboardTickets;
